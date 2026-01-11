import type { Page } from "@playwright/test";
import type {
  Question,
  TestInitialState,
  Wolf,
  CompletedTerritories,
  TerritoryScores,
  WolfRole,
  StatName,
} from "../src/types";

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
 */
export async function answerQuizQuestions(
  page: Page,
  correctAnswers: string[],
  numQuestions: number
) {
  for (let i = 0; i < numQuestions; i++) {
    await page.waitForTimeout(700);

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

    await page.waitForTimeout(700);

    // Click next or see results
    const nextButton = page.getByText(/Next Question|See Results/);
    await nextButton.click();
  }
}

/**
 * Helper function to answer questions incorrectly
 * Tries to find and click wrong answers from the provided list
 */
export async function answerQuestionsIncorrectly(
  page: Page,
  wrongAnswers: string[],
  correctAnswers: string[],
  numQuestions: number
) {
  for (let i = 0; i < numQuestions; i++) {
    await page.waitForTimeout(700);

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

    await page.waitForTimeout(700);

    const nextButton = page.getByText(/Next Question|See Results/);
    if (await nextButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await nextButton.click();
    }
  }
}

/**
 * Inject initial test state before navigating to the app
 * This sets window.__TEST_INITIAL_STATE__ which the app reads on mount
 */
export async function setTestInitialState(page: Page, state: TestInitialState): Promise<void> {
  await page.addInitScript((testState) => {
    window.__TEST_INITIAL_STATE__ = testState;
  }, state);
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
