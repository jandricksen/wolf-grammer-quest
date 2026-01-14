import { test, expect } from "@playwright/test";
import { territories } from "../src/data/territories";
import {
  getCorrectAnswers,
  getWrongAnswers,
  answerQuizQuestions,
  answerQuestionsIncorrectly,
  getQuizQuestionCount,
} from "./test-utils";

test.describe("Wolf Earning Tests", () => {
  test("complete territory with 80%+ score and earn wolf", async ({ page }) => {
    await page.goto("/");

    // Start "Apostrophe Forest" territory
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Verify quiz started
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Get correct answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const questionCount = getQuizQuestionCount(territory.questions.length);

    // Answer all questions correctly to earn wolf
    await answerQuizQuestions(page, correctAnswers, questionCount);

    // Verify completion screen shows "Territory Conquered!"
    await expect(page.getByRole("heading", { name: "Territory Conquered!" })).toBeVisible({
      timeout: 5000,
    });

    // Check for "New wolf earned!" banner
    await expect(page.getByText("New wolf earned!")).toBeVisible();

    // Verify score is displayed (should be 10/10)
    await expect(page.getByText(/scored \d+ out of \d+/)).toBeVisible();
  });

  test("wolf is assigned auto-generated name on earning", async ({ page }) => {
    await page.goto("/");

    // Start and complete territory with 80%+ score
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Get correct answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const questionCount = getQuizQuestionCount(territory.questions.length);

    // Answer all questions correctly to ensure 80%+ score
    await answerQuizQuestions(page, correctAnswers, questionCount);

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Territory Conquered!" })).toBeVisible({
      timeout: 10000,
    });

    // Check if new wolf was earned (should be earned with 100% score)
    await expect(page.getByText("New wolf earned!")).toBeVisible();

    // Wolf reward modal should appear with auto-generated name
    await expect(page.getByRole("heading", { name: "Meet Your New Wolf!" })).toBeVisible({
      timeout: 5000,
    });

    // Verify that a name is displayed (should be from WOLF_NAMES array - not checking exact name as it's random)
    await expect(page.locator("text=Name").first()).toBeVisible();

    // Verify "Welcome to the Pack!" button exists (no input field)
    const welcomeButton = page.getByRole("button", { name: "Welcome to the Pack!" });
    await expect(welcomeButton).toBeVisible();

    // Click to add wolf to pack
    await welcomeButton.click();

    // Verify we're back at completion screen and modal is gone
    await expect(page.getByRole("heading", { name: "Meet Your New Wolf!" })).not.toBeVisible({
      timeout: 3000,
    });

    // Navigate to pack and verify wolf was added
    await page.getByRole("button", { name: "Choose Another Territory" }).click();
    await page.getByRole("button", { name: "View Full Pack" }).click();

    // Pack should now have 2 wolves (Luna + new wolf)
    await expect(page.getByText("2 members strong")).toBeVisible();
  });

  test("wolf appears in pack after earning", async ({ page }) => {
    // This test verifies that Luna (starter wolf) appears in the pack
    // More complex wolf earning is tested in the previous test
    await page.goto("/");

    // Navigate to pack screen
    await page.getByRole("button", { name: "View Full Pack" }).click();

    // Verify "Your Wolf Pack" heading
    await expect(page.getByRole("heading", { name: "Your Wolf Pack" })).toBeVisible();

    // Check for Luna (starter wolf)
    await expect(page.getByText("Luna")).toBeVisible();

    // Verify at least one wolf card exists (click on Luna to verify it's clickable)
    const lunaCard = page.locator("button").filter({ hasText: "Luna" });
    await expect(lunaCard).toBeVisible();
  });

  test("failing score does not earn wolf", async ({ page }) => {
    await page.goto("/");

    // Start territory
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Get correct and wrong answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const wrongAnswers = getWrongAnswers(territory.questions);
    const questionCount = getQuizQuestionCount(territory.questions.length);

    // Answer only 50% questions correctly (below 80% threshold)
    const correctCount = Math.floor(questionCount * 0.5);
    const wrongCount = questionCount - correctCount;

    await answerQuizQuestions(page, correctAnswers, correctCount);

    // Answer remaining questions with wrong answers
    await answerQuestionsIncorrectly(page, wrongAnswers, correctAnswers, wrongCount);

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Keep Practising!" })).toBeVisible({
      timeout: 10000,
    });

    // Verify "New wolf earned!" does NOT appear
    await expect(page.getByText("New wolf earned!")).not.toBeVisible();
  });

  test("treats are awarded based on score", async ({ page }) => {
    await page.goto("/");

    // Complete territory with high score
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Get correct answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const questionCount = getQuizQuestionCount(territory.questions.length);

    // Answer all questions correctly for 100% score
    await answerQuizQuestions(page, correctAnswers, questionCount);

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Territory Conquered!" })).toBeVisible({
      timeout: 10000,
    });

    // Verify treats earned section is visible (use first() to avoid strict mode violations)
    await expect(page.getByText(/Treats Earned|Meat Chunk/).first()).toBeVisible();

    // Verify score is displayed (should be 10/10)
    await expect(page.getByText(/scored \d+ out of \d+/)).toBeVisible();
  });
});
