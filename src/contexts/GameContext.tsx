import { createContext, useState, ReactNode } from "react";
import type {
  Screen,
  Wolf,
  Treats,
  CompletedTerritories,
  TerritoryScores,
  WolfRole,
  StatName,
  Question,
} from "../types";
import { territories, territoryWolves } from "../data";
import { createInitialWolf, getWolfTrait, getRandomWolfName } from "../utils/wolfUtils";
import { calculateTreatsEarned, applyTreatsToInventory, TreatsEarned } from "../utils/treatUtils";
import { checkPassingScore, shuffleArray } from "../utils/quizUtils";

// Pending wolf type (wolf that has been earned and assigned a name)
interface PendingWolf {
  role: WolfRole;
  fact: string;
  trait: StatName;
  territory: string;
  name: string;
}

// Game context state interface
interface GameState {
  // Screen navigation
  screen: Screen;

  // Pack and wolves
  pack: Wolf[];
  selectedWolf: Wolf | null;
  pendingWolf: PendingWolf | null;
  newWolfName: string;
  showPackReward: boolean;

  // Treats
  treats: Treats;
  pendingTreats: TreatsEarned | null;

  // Territory progress
  completedTerritories: CompletedTerritories;
  territoryScores: TerritoryScores;

  // Quiz state
  currentTerritory: string | null;
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  showFeedback: boolean;
  shuffledQuestions: Question[];
}

// Game context actions interface
interface GameActions {
  // Navigation
  navigateTo: (screen: Screen) => void;

  // Territory/Quiz actions
  startTerritory: (territoryId: string) => void;
  selectAnswer: (answer: string) => void;
  nextQuestion: () => void;

  // Wolf actions
  setNewWolfName: (name: string) => void;
  addWolfToPack: () => void;
  selectWolf: (wolf: Wolf | null) => void;
  closePackReward: () => void;
}

// Combined context value
interface GameContextValue extends GameState, GameActions {}

// Create context with undefined default (will be provided by GameProvider)
export const GameContext = createContext<GameContextValue | undefined>(undefined);

// Provider props
interface GameProviderProps {
  children: ReactNode;
}

/**
 * GameProvider - Centralized state management for Wolf Grammar Quest
 * Replaces 16 useState hooks with a single context provider
 */
export function GameProvider({ children }: GameProviderProps) {
  // Screen navigation
  const [screen, setScreen] = useState<Screen>("home");

  // Pack and wolves
  const [pack, setPack] = useState<Wolf[]>([createInitialWolf()]);
  const [selectedWolf, setSelectedWolf] = useState<Wolf | null>(null);
  const [pendingWolf, setPendingWolf] = useState<PendingWolf | null>(null);
  const [newWolfName, setNewWolfName] = useState("");
  const [showPackReward, setShowPackReward] = useState(false);

  // Treats
  const [treats, setTreats] = useState<Treats>({
    meatChunk: 5, // Starting treats to get going
    wisdomBerry: 0,
    swiftMeat: 0,
    goldenKibble: 0,
  });
  const [pendingTreats, setPendingTreats] = useState<TreatsEarned | null>(null);

  // Territory progress
  const [completedTerritories, setCompletedTerritories] = useState<CompletedTerritories>({});
  const [territoryScores, setTerritoryScores] = useState<TerritoryScores>({});

  // Quiz state
  const [currentTerritory, setCurrentTerritory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  // Navigation action
  const navigateTo = (newScreen: Screen) => {
    setScreen(newScreen);
  };

  // Start a territory quiz
  const startTerritory = (territoryId: string) => {
    // Shuffle questions for this quiz session
    const questions = territories[territoryId].questions;
    setShuffledQuestions(shuffleArray(questions));

    setCurrentTerritory(territoryId);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setPendingTreats(null);
    setScreen("quiz");
  };

  // Handle answer selection
  const selectAnswer = (answer: string) => {
    if (showFeedback || !currentTerritory) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);

    const currentQ = shuffledQuestions[currentQuestionIndex];
    if (answer === currentQ.correct) {
      setScore(score + 1);
    }
  };

  // Move to next question or complete territory
  const nextQuestion = () => {
    if (!currentTerritory) return;

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Territory complete - calculate final score including the last question
      const currentQ = shuffledQuestions[currentQuestionIndex];
      const finalScore = selectedAnswer === currentQ.correct ? score + 1 : score;

      // Update score state to final value
      setScore(finalScore);

      setTerritoryScores({
        ...territoryScores,
        [currentTerritory]: finalScore,
      });

      // Check for wolf reward and calculate treats with correct final score
      checkTerritoryReward(currentTerritory, finalScore, shuffledQuestions.length);

      setScreen("complete");
    }
  };

  // Check if player earned a wolf and calculate treats
  const checkTerritoryReward = (
    territoryKey: string,
    finalScore: number,
    totalQuestions: number
  ) => {
    const passed = checkPassingScore(finalScore, totalQuestions);
    const alreadyCompleted = completedTerritories[territoryKey];

    // Calculate treats regardless of pass/fail
    const treatsEarned = calculateTreatsEarned(finalScore, totalQuestions);
    setPendingTreats(treatsEarned);

    // Add treats to inventory
    setTreats((prev) => applyTreatsToInventory(prev, treatsEarned));

    if (passed && !alreadyCompleted) {
      const wolfReward = territoryWolves[territoryKey];
      if (wolfReward) {
        // Get trait and auto-assign name for the new wolf
        const newWolfTrait = getWolfTrait(wolfReward.role);
        const usedNames = pack.map((w) => w.name);
        const newName = getRandomWolfName(usedNames);

        setPendingWolf({
          role: wolfReward.role,
          fact: wolfReward.fact,
          trait: newWolfTrait,
          territory: territoryKey,
          name: newName,
        });
        setShowPackReward(true);
      }
    }
  };

  // Add named wolf to pack
  const addWolfToPack = () => {
    if (pendingWolf) {
      const newWolf: Wolf = {
        id: `wolf_${Date.now()}`,
        name: pendingWolf.name,
        role: pendingWolf.role,
        fact: pendingWolf.fact,
        earned: true,
        trait: pendingWolf.trait,
      };
      setPack([...pack, newWolf]);
      setCompletedTerritories({ ...completedTerritories, [pendingWolf.territory]: true });
      setShowPackReward(false);
      setNewWolfName("");
      setPendingWolf(null);
    }
  };

  // Select a wolf for detail view
  const selectWolf = (wolf: Wolf | null) => {
    setSelectedWolf(wolf);
  };

  // Close pack reward modal
  const closePackReward = () => {
    setShowPackReward(false);
  };

  // Combine state and actions into context value
  const value: GameContextValue = {
    // State
    screen,
    pack,
    selectedWolf,
    pendingWolf,
    newWolfName,
    showPackReward,
    treats,
    pendingTreats,
    completedTerritories,
    territoryScores,
    currentTerritory,
    currentQuestionIndex,
    score,
    selectedAnswer,
    showFeedback,
    shuffledQuestions,

    // Actions
    navigateTo,
    startTerritory,
    selectAnswer,
    nextQuestion,
    setNewWolfName,
    addWolfToPack,
    selectWolf,
    closePackReward,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
