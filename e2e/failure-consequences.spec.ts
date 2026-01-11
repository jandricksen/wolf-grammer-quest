import { test, expect } from "@playwright/test";
import { territories } from "../src/data/territories";
import {
  getCorrectAnswers,
  getWrongAnswers,
  answerQuizQuestions,
  answerQuestionsIncorrectly,
  setGameState,
  createTestWolf,
  createHungryWolf,
} from "./test-utils";

test.describe("Failure Consequences", () => {
  test("failing territory makes most recently fed wolf hungry", async ({ page }) => {
    // Set up game state with Luna (the starter wolf, recently fed)
    await setGameState(page, {
      completedTerritories: {},
      territoryScores: {},
      pack: [createTestWolf("wolf_luna", "Luna", "Alpha", "courage")],
      treats: { meatChunk: 5, wisdomBerry: 0, swiftMeat: 0, goldenKibble: 0 },
      hasWon: false,
    });

    await page.goto("/");

    // Start a territory
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Get correct and wrong answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const wrongAnswers = getWrongAnswers(territory.questions);
    const questionCount = territory.questions.length;

    // Answer only 50% questions correctly (below 80% threshold)
    const correctCount = Math.floor(questionCount * 0.5);
    const wrongCount = questionCount - correctCount;

    await answerQuizQuestions(page, correctAnswers, correctCount);
    await answerQuestionsIncorrectly(page, wrongAnswers, correctAnswers, wrongCount);

    // Wait for completion screen with "Keep Practising!" heading
    await expect(page.getByRole("heading", { name: "Keep Practising!" })).toBeVisible({
      timeout: 10000,
    });

    // Verify failed wolf message appears
    const failedWolfMessage = page.getByTestId("failed-wolf-message");
    await expect(failedWolfMessage).toBeVisible();
    await expect(failedWolfMessage).toContainText("Luna");
    await expect(failedWolfMessage).toContainText("hungry");
  });

  test("failure message shows which wolf became hungry", async ({ page }) => {
    // Set up game state with multiple wolves - we want to test the most recently fed one gets hungry
    const now = Date.now();
    await setGameState(page, {
      completedTerritories: {},
      territoryScores: {},
      pack: [
        // Luna was fed 2 hours ago
        {
          id: "wolf_luna",
          name: "Luna",
          role: "Alpha",
          earned: true,
          fact: "Alpha wolf fact",
          trait: "courage",
          lastFedAt: now - 2 * 60 * 60 * 1000,
        },
        // Shadow was fed 1 hour ago (most recently fed)
        {
          id: "wolf_shadow",
          name: "Shadow",
          role: "Scout",
          earned: true,
          fact: "Scout wolf fact",
          trait: "swiftness",
          lastFedAt: now - 1 * 60 * 60 * 1000,
        },
      ],
      treats: { meatChunk: 5, wisdomBerry: 0, swiftMeat: 0, goldenKibble: 0 },
      hasWon: false,
    });

    await page.goto("/");

    // Start a territory and fail it
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const wrongAnswers = getWrongAnswers(territory.questions);
    const questionCount = territory.questions.length;

    // Answer all questions incorrectly to fail
    await answerQuestionsIncorrectly(page, wrongAnswers, correctAnswers, questionCount);

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Keep Practising!" })).toBeVisible({
      timeout: 10000,
    });

    // Verify the most recently fed wolf (Shadow) became hungry
    const failedWolfMessage = page.getByTestId("failed-wolf-message");
    await expect(failedWolfMessage).toBeVisible();
    await expect(failedWolfMessage).toContainText("Shadow");
  });

  test("all wolves already hungry - no additional consequence", async ({ page }) => {
    // Set up game state where all wolves are already hungry
    await setGameState(page, {
      completedTerritories: {},
      territoryScores: {},
      pack: [createHungryWolf("wolf_luna", "Luna", "Alpha", "courage")],
      treats: { meatChunk: 5, wisdomBerry: 0, swiftMeat: 0, goldenKibble: 0 },
      hasWon: false,
    });

    await page.goto("/");

    // Start a territory and fail it
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const wrongAnswers = getWrongAnswers(territory.questions);
    const questionCount = territory.questions.length;

    // Answer all questions incorrectly to fail
    await answerQuestionsIncorrectly(page, wrongAnswers, correctAnswers, questionCount);

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Keep Practising!" })).toBeVisible({
      timeout: 10000,
    });

    // Failed wolf message should NOT appear since all wolves are already hungry
    const failedWolfMessage = page.getByTestId("failed-wolf-message");
    await expect(failedWolfMessage).not.toBeVisible();
  });

  test("feeding hungry wolf after failure works", async ({ page }) => {
    // Set up game state with Luna (recently fed)
    await setGameState(page, {
      completedTerritories: {},
      territoryScores: {},
      pack: [createTestWolf("wolf_luna", "Luna", "Alpha", "courage")],
      treats: { meatChunk: 5, wisdomBerry: 0, swiftMeat: 0, goldenKibble: 0 },
      hasWon: false,
    });

    await page.goto("/");

    // Start a territory and fail it to make Luna hungry
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const wrongAnswers = getWrongAnswers(territory.questions);
    const questionCount = territory.questions.length;

    // Answer all questions incorrectly to fail
    await answerQuestionsIncorrectly(page, wrongAnswers, correctAnswers, questionCount);

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Keep Practising!" })).toBeVisible({
      timeout: 10000,
    });

    // Verify Luna became hungry
    const failedWolfMessage = page.getByTestId("failed-wolf-message");
    await expect(failedWolfMessage).toBeVisible();
    await expect(failedWolfMessage).toContainText("Luna");

    // Navigate to pack and feed Luna
    await page.getByRole("button", { name: "Choose Another Territory" }).click();
    await page.getByRole("button", { name: "View Full Pack" }).click();

    // Click on Luna to view details
    await page.getByText("Luna").first().click();

    // Verify wolf is now hungry
    await expect(page.getByText("🍖 Hungry")).toBeVisible();

    // Click feed button (should now be enabled)
    const feedButton = page.getByRole("button", { name: /Feed/ });
    await expect(feedButton).toBeEnabled();
    await feedButton.click();

    // Verify wolf is now ready (not hungry)
    await expect(page.getByText("✓ Ready")).toBeVisible();
  });
});
