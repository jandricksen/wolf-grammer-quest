import { test, expect } from "@playwright/test";
import { territories } from "../src/data/territories";
import { getCorrectAnswers, answerQuizQuestions, waitForAnswersToAppear } from "./test-utils";

test.describe("Quiz Flow Tests", () => {
  test("complete full quiz journey", async ({ page }) => {
    await page.goto("/");

    // Click "Apostrophe Forest" territory
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Verify quiz screen loads with question
    await expect(page.getByText("Question 1 of")).toBeVisible();
    await expect(page.getByText("Apostrophe Forest")).toBeVisible();

    // Get correct answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);
    const questionCount = territory.questions.length;

    // Answer all questions correctly to complete the quiz
    await answerQuizQuestions(page, correctAnswers, questionCount);

    // Verify completion screen appears
    await expect(page.getByRole("heading", { name: "Territory Conquered!" })).toBeVisible({
      timeout: 10000,
    });

    // Check score is displayed with any percentage
    await expect(page.getByText(/scored \d+ out of \d+/)).toBeVisible();

    // Verify action buttons are present (use first() to avoid strict mode violation)
    await expect(page.getByText(/Try Again|Choose Another Territory/).first()).toBeVisible();
  });

  test("test multiple choice question interaction", async ({ page }) => {
    await page.goto("/");

    // Start "Apostrophe Forest" (all questions are multiple choice)
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Wait for first question
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Get correct answers from actual question data (data-driven approach)
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);

    // Wait for reading timer to complete before answers appear
    await waitForAnswersToAppear(page);

    // Find and click a correct answer using data-driven approach
    let answerClicked = false;
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 500 }).catch(() => false)) {
        await answerButton.click();
        answerClicked = true;
        break;
      }
    }

    // Verify we successfully clicked an answer
    expect(answerClicked).toBe(true);

    // Verify feedback panel appears (green for correct)
    await page.waitForTimeout(500);
    const feedbackPanel = page.locator(".bg-green-50, .bg-amber-50");
    await expect(feedbackPanel.first()).toBeVisible({ timeout: 3000 });

    // Verify "Correct!" message appears
    await expect(page.getByText("Correct!")).toBeVisible();

    // Verify Next Question button appears
    await expect(page.getByText(/Next Question|See Results/)).toBeVisible({ timeout: 2000 });
  });

  test("test quiz navigation", async ({ page }) => {
    await page.goto("/");

    // Start a quiz
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Verify quiz screen loads
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Click "← Back" button
    const backButton = page.getByText("Back").first();
    await backButton.click();

    // Verify returns to home screen
    await expect(page.getByText("Choose Your Territory")).toBeVisible();

    // Start quiz again to verify state reset
    await territoryCard.click();

    // Should be back at question 1
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Score should be reset (showing 0)
    await expect(page.getByText("0 🐺")).toBeVisible();
  });

  test("quiz shows progress correctly", async ({ page }) => {
    await page.goto("/");

    // Start quiz
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Check initial progress
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Get correct answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);

    // Wait for reading timer to complete before answers appear
    await waitForAnswersToAppear(page);

    // Answer first question with any correct answer
    let answerClicked = false;
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 500 }).catch(() => false)) {
        await answerButton.click();
        answerClicked = true;
        break;
      }
    }

    if (answerClicked) {
      await page.waitForTimeout(500);

      // Click next
      const nextButton = page.getByText("Next Question");
      if (await nextButton.isVisible({ timeout: 2000 }).catch(() => false)) {
        await nextButton.click();

        // Check progress updated
        await expect(page.getByText("Question 2 of")).toBeVisible();
      }
    }
  });

  test("quiz displays feedback after answer selection", async ({ page }) => {
    await page.goto("/");

    // Start quiz
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Wait for question
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Get correct answers from actual question data
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);

    // Wait for reading timer to complete before answers appear
    await waitForAnswersToAppear(page);

    // Select a correct answer to ensure we can verify feedback
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 500 }).catch(() => false)) {
        await answerButton.click();
        break;
      }
    }

    // Wait for feedback
    await page.waitForTimeout(500);

    // Verify feedback message appears (Correct! or Not quite...)
    await expect(page.getByText(/Correct!|Not quite/)).toBeVisible({
      timeout: 3000,
    });

    // Verify next button appears after selecting answer
    await expect(page.getByText(/Next Question|See Results/)).toBeVisible({ timeout: 2000 });
  });

  test("reading timer shows before answers appear", async ({ page }) => {
    await page.goto("/");

    // Start a quiz
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Verify quiz screen loads
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Verify reading timer message is visible initially
    await expect(page.getByText("Read the question carefully...")).toBeVisible();

    // Verify answer buttons are NOT visible during timer
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);

    // Check that at least one correct answer is NOT visible yet
    let anyAnswerVisible = false;
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 100 }).catch(() => false)) {
        anyAnswerVisible = true;
        break;
      }
    }
    expect(anyAnswerVisible).toBe(false);

    // Wait for timer to complete
    await waitForAnswersToAppear(page);

    // Now verify answer buttons ARE visible
    let answerNowVisible = false;
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 500 }).catch(() => false)) {
        answerNowVisible = true;
        break;
      }
    }
    expect(answerNowVisible).toBe(true);

    // Timer message should be gone
    await expect(page.getByText("Read the question carefully...")).not.toBeVisible();
  });

  test("reading timer resets for each question", async ({ page }) => {
    await page.goto("/");

    // Start a quiz
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Get correct answers
    const territory = territories["apostrophes"];
    const correctAnswers = getCorrectAnswers(territory.questions);

    // Wait for timer and answer first question
    await waitForAnswersToAppear(page);

    // Click any correct answer
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 500 }).catch(() => false)) {
        await answerButton.click();
        break;
      }
    }

    // Click next question
    await page.waitForTimeout(500);
    const nextButton = page.getByText("Next Question");
    await nextButton.click();

    // Verify we're on question 2
    await expect(page.getByText("Question 2 of")).toBeVisible();

    // Timer should be showing again for the new question
    await expect(page.getByText("Read the question carefully...")).toBeVisible();

    // Answer buttons should NOT be visible yet
    let anyAnswerVisible = false;
    for (const answer of correctAnswers) {
      const answerButton = page.getByRole("button", { name: answer, exact: true });
      if (await answerButton.isVisible({ timeout: 100 }).catch(() => false)) {
        anyAnswerVisible = true;
        break;
      }
    }
    expect(anyAnswerVisible).toBe(false);
  });
});
