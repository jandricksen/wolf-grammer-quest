import { test, expect } from "@playwright/test";
import { territories } from "../src/data/territories";
import {
  getCorrectAnswers,
  answerQuizQuestions,
  setGameState,
  createCompletedTerritories,
  createTerritoryScores,
  createTestWolf,
} from "./test-utils";

test.describe("Win Condition Tests", () => {
  test("completing 8th territory triggers win screen", async ({ page }) => {
    // Get all territory keys
    const allTerritoryKeys = Object.keys(territories);

    // Set 7 territories as completed, leave "directspeech" for the test
    const completedKeys = allTerritoryKeys.filter((k) => k !== "directspeech");
    const finalTerritory = "directspeech";

    // Get question count for the final territory
    const questionCount = territories[finalTerritory].questions.length;

    // Create wolves for completed territories (8 wolves including Luna)
    const testWolves = [
      createTestWolf("wolf_luna", "Luna", "Alpha", "courage"),
      createTestWolf("wolf_1", "Shadow", "Scout", "swiftness"),
      createTestWolf("wolf_2", "River", "Tracker", "wisdom"),
      createTestWolf("wolf_3", "Frost", "Hunter", "courage"),
      createTestWolf("wolf_4", "Ash", "Guardian", "kindness"),
      createTestWolf("wolf_5", "Ember", "Howler", "focus"),
      createTestWolf("wolf_6", "Sage", "Shadow", "swiftness"),
      createTestWolf("wolf_7", "Willow", "Elder", "wisdom"),
    ];

    // Set up initial state with 7 completed territories
    await setGameState(page, {
      completedTerritories: createCompletedTerritories(completedKeys),
      territoryScores: createTerritoryScores(completedKeys, 10),
      pack: testWolves,
      treats: { meatChunk: 50, wisdomBerry: 10, swiftMeat: 10, goldenKibble: 5 },
      hasWon: false,
    });

    // Navigate to the app
    await page.goto("/");

    // Verify we're on home screen
    await expect(page.getByText("Choose Your Territory")).toBeVisible();

    // Start the final territory (Speech Cavern)
    const finalTerritoryCard = page.getByRole("button").filter({ hasText: "Speech Cavern" });
    await finalTerritoryCard.click();

    // Verify quiz started
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Get correct answers and complete the territory with 100% score
    const territory = territories[finalTerritory];
    const correctAnswers = getCorrectAnswers(territory.questions);

    await answerQuizQuestions(page, correctAnswers, questionCount);

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Territory Conquered!" })).toBeVisible({
      timeout: 10000,
    });

    // Check that new wolf is earned
    await expect(page.getByText("New wolf earned!")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Meet Your New Wolf!" })).toBeVisible({
      timeout: 5000,
    });

    // Accept the new wolf
    const welcomeButton = page.getByRole("button", { name: "Welcome to the Pack!" });
    await welcomeButton.click();

    // CRITICAL: Verify win screen appears
    await expect(page.getByRole("heading", { name: "Victory!" })).toBeVisible({
      timeout: 10000,
    });
    await expect(page.getByText("Alpha of Alphas")).toBeVisible();

    // Verify achievement stats are displayed
    await expect(page.getByText("Territories Mastered")).toBeVisible();
    await expect(page.getByText("Wolves in Pack")).toBeVisible();

    // Verify navigation buttons work
    await expect(page.getByRole("button", { name: "Return to Map" })).toBeVisible();
    await expect(page.getByRole("button", { name: "View Pack" })).toBeVisible();

    // Test navigation from win screen
    await page.getByRole("button", { name: "Return to Map" }).click();
    await expect(page.getByText("Choose Your Territory")).toBeVisible();
  });

  test("win screen displays pack and stats correctly", async ({ page }) => {
    // Set up state where all 8 territories are already completed
    const allTerritoryKeys = Object.keys(territories);

    const testWolves = [
      createTestWolf("wolf_luna", "Luna", "Alpha", "courage"),
      createTestWolf("wolf_1", "Shadow", "Scout", "swiftness"),
      createTestWolf("wolf_2", "River", "Tracker", "wisdom"),
      createTestWolf("wolf_3", "Frost", "Hunter", "courage"),
      createTestWolf("wolf_4", "Ash", "Guardian", "kindness"),
      createTestWolf("wolf_5", "Ember", "Howler", "focus"),
      createTestWolf("wolf_6", "Sage", "Shadow", "swiftness"),
      createTestWolf("wolf_7", "Willow", "Elder", "wisdom"),
      createTestWolf("wolf_8", "Storm", "Storyteller", "kindness"),
    ];

    await setGameState(page, {
      completedTerritories: createCompletedTerritories(allTerritoryKeys),
      territoryScores: createTerritoryScores(allTerritoryKeys, 10),
      pack: testWolves,
      treats: { meatChunk: 50, wisdomBerry: 10, swiftMeat: 10, goldenKibble: 5 },
      hasWon: true,
    });

    // Navigate to app and go to pack screen
    await page.goto("/");

    // Navigate to pack to verify wolves
    await page.getByRole("button", { name: "View Full Pack" }).click();

    // Verify all 9 wolves are displayed
    await expect(page.getByText("9 members strong")).toBeVisible();

    // Verify specific wolves appear (use first() to avoid strict mode issues with common names)
    await expect(page.getByText("Luna").first()).toBeVisible();
    await expect(page.getByText("River")).toBeVisible();
    await expect(page.getByText("Storm")).toBeVisible();
  });
});
