import type { Page } from "@playwright/test";
import type {
  Question,
  Wolf,
  CompletedTerritories,
  TerritoryScores,
  WolfRole,
  StatName,
  Treats,
} from "../src/types";
import { READING_TIME_SECONDS, HUNGER_THRESHOLD_HOURS } from "../src/data/constants";

// Storage key must match the one in persistenceUtils.ts
const STORAGE_KEY = "wolfGrammarQuest_v1";

// Persisted state interface (matches source)
export interface PersistedState {
  completedTerritories: CompletedTerritories;
  territoryScores: TerritoryScores;
  pack: Wolf[];
  treats: Treats;
  hasWon: boolean;
}

/**
 * Wait for the reading timer to complete and answers to appear
 * Waits for the timer countdown to finish (5 seconds by default)
 */
export async function waitForAnswersToAppear(page: Page): Promise<void> {
  // Wait for the reading timer to complete (add a small buffer for animation)
  await page.waitForTimeout(READING_TIME_SECONDS * 1000 + 500);
}

/**
 * Extract all correct answers from a question array
 */
export function getCorrectAnswers(questions: Question[]): string[] {
  return questions.map((q) => q.correct);
}

/**
 * Extract all wrong answers from a question array
 * (all options that are NOT the correct answer)
 */
export function getWrongAnswers(questions: Question[]): string[] {
  const wrongAnswers: string[] = [];

  for (const question of questions) {
    if (question.type === "multiple" && question.options) {
      // Add all options except the correct one
      const wrongs = question.options.filter((option) => option !== question.correct);
      wrongAnswers.push(...wrongs);
    }
  }

  return wrongAnswers;
}

/**
 * Helper function to answer quiz questions with randomised order
 * Tries to find and click any visible correct answer from the provided list
 * Waits for the reading timer to complete before attempting to click answers
 */
export async function answerQuizQuestions(
  page: Page,
  correctAnswers: string[],
  numQuestions: number
) {
  for (let i = 0; i < numQuestions; i++) {
    // Wait for the reading timer to complete before answers appear
    await waitForAnswersToAppear(page);

    // Try to find and click any of the correct answers that's visible
    let answerClicked = false;
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 500 }).catch(() => false)) {
        await answerButton.click();
        answerClicked = true;
        break;
      }
    }

    if (!answerClicked) {
      throw new Error(`Could not find any correct answer on question ${i + 1}`);
    }

    await page.waitForTimeout(500);

    // Click next or see results
    const nextButton = page.getByText(/Next Question|See Results/);
    await nextButton.click();
  }
}

/**
 * Helper function to answer questions incorrectly
 * Tries to find and click wrong answers from the provided list
 * Waits for the reading timer to complete before attempting to click answers
 */
export async function answerQuestionsIncorrectly(
  page: Page,
  wrongAnswers: string[],
  correctAnswers: string[],
  numQuestions: number
) {
  for (let i = 0; i < numQuestions; i++) {
    // Wait for the reading timer to complete before answers appear
    await waitForAnswersToAppear(page);

    // Try to click a wrong answer
    let wrongClicked = false;
    for (const wrongAnswer of wrongAnswers) {
      const wrongButton = page.getByRole("button", { name: wrongAnswer, exact: true });
      if (await wrongButton.isVisible({ timeout: 500 }).catch(() => false)) {
        await wrongButton.click();
        wrongClicked = true;
        break;
      }
    }

    // If no specific wrong answer found, click first non-correct button
    if (!wrongClicked) {
      const allButtons = page.getByRole("button").filter({ hasText: /.+/ });
      const count = await allButtons.count();
      for (let j = 0; j < count; j++) {
        const buttonText = await allButtons.nth(j).textContent();
        if (buttonText && !correctAnswers.includes(buttonText.trim())) {
          await allButtons.nth(j).click();
          wrongClicked = true;
          break;
        }
      }
    }

    await page.waitForTimeout(500);

    const nextButton = page.getByText(/Next Question|See Results/);
    if (await nextButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await nextButton.click();
    }
  }
}

/**
 * Inject game state via localStorage before navigating to the app
 * Tests use the localStorage fallback mechanism for persistence
 */
export async function setGameState(page: Page, state: PersistedState): Promise<void> {
  await page.addInitScript(
    (args) => {
      localStorage.setItem(args.key, JSON.stringify(args.state));
    },
    { key: STORAGE_KEY, state }
  );
}

/**
 * Create a completed territories object with specified territories marked as complete
 */
export function createCompletedTerritories(territoryKeys: string[]): CompletedTerritories {
  return territoryKeys.reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {} as CompletedTerritories);
}

/**
 * Create territory scores for completed territories (at passing threshold)
 */
export function createTerritoryScores(
  territoryKeys: string[],
  scorePerTerritory: number
): TerritoryScores {
  return territoryKeys.reduce((acc, key) => {
    acc[key] = scorePerTerritory;
    return acc;
  }, {} as TerritoryScores);
}

/**
 * Create a wolf for testing purposes
 */
export function createTestWolf(id: string, name: string, role: WolfRole, trait: StatName): Wolf {
  return {
    id,
    name,
    role,
    earned: true,
    fact: "Test wolf fact",
    trait,
    lastFedAt: Date.now(),
  };
}

/**
 * Create a hungry wolf for testing purposes (fed more than 24 hours ago)
 */
export function createHungryWolf(id: string, name: string, role: WolfRole, trait: StatName): Wolf {
  return {
    id,
    name,
    role,
    earned: true,
    fact: "Test wolf fact",
    trait,
    lastFedAt: Date.now() - (HUNGER_THRESHOLD_HOURS + 1) * 60 * 60 * 1000,
  };
}
