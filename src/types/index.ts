// Screen navigation
export type Screen = "home" | "quiz" | "complete" | "pack" | "wolfDetail" | "inventory" | "win";

// Question types
export type QuestionType = "multiple";

export interface Question {
  type: QuestionType;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  wrongExplanation: string;
}

export interface Territory {
  name: string;
  description: string;
  icon: string;
  questions: Question[];
}

// Wolf types
export type StatName = "wisdom" | "swiftness" | "courage" | "kindness" | "focus";
export type WolfRole =
  | "Alpha"
  | "Scout"
  | "Tracker"
  | "Hunter"
  | "Guardian"
  | "Howler"
  | "Shadow"
  | "Elder"
  | "Storyteller"
  | "Seeker"
  | "Runner"
  | "Painter"
  | "Whisperer";

export interface Wolf {
  id: string;
  name: string;
  role: WolfRole;
  earned: boolean;
  fact: string;
  trait: StatName;
  lastFedAt: number;
}

// Treats
export type TreatType = "meatChunk" | "wisdomBerry" | "swiftMeat" | "goldenKibble";
export type Treats = Record<TreatType, number>;

// Game state
export interface TerritoryScores {
  [territoryId: string]: number;
}

export interface CompletedTerritories {
  [territoryId: string]: boolean;
}

// Stat and treat metadata
export interface StatInfo {
  icon: string;
  color: string;
  description: string;
}

export interface TreatInfo {
  icon: string;
  name: string;
  description: string;
}

// Role trait mapping
export type RoleTraits = Record<WolfRole, StatName>;

// Territory wolf configuration
export interface TerritoryWolf {
  role: WolfRole;
  fact: string;
  statTemplate: WolfRole;
}

export interface TerritoryWolves {
  [territoryId: string]: TerritoryWolf;
}

// Quiz state
export interface QuizState {
  territoryId: string;
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  showFeedback: boolean;
  questions: Question[];
  showAnswers: boolean;
  readingTimeRemaining: number;
}

// Failure consequence state
export interface FailedWolf {
  id: string;
  name: string;
}

// Test state injection (development/test mode only)
export interface TestInitialState {
  completedTerritories?: CompletedTerritories;
  territoryScores?: TerritoryScores;
  pack?: Wolf[];
  treats?: Treats;
  hasWon?: boolean;
}
