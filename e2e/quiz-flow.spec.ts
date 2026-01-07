import { test, expect } from "@playwright/test";

test.describe("Quiz Flow Tests", () => {
  test("complete full quiz journey", async ({ page }) => {
    await page.goto("/");

    // Click "Apostrophe Forest" territory
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Verify quiz screen loads with question
    await expect(page.getByText("Question 1 of")).toBeVisible();
    await expect(page.getByText("Apostrophe Forest")).toBeVisible();

    // Answer all 10 questions correctly to complete the quiz
    const correctAnswers = [
      "wolf's",
      "The wolves' territory was vast.",
      "doesn't",
      "The decision belongs to the alpha",
      "pups' coats",
      "couldn't howl",
      "pack's",
      "The pack knows its territory well.",
      "wolf's",
      "More than one wolf",
    ];

    for (let i = 0; i < correctAnswers.length; i++) {
      await page.waitForTimeout(700);

      // Click correct answer
      const answerButton = page.getByRole("button", { name: correctAnswers[i], exact: true });
      await answerButton.click();

      await page.waitForTimeout(700);

      // Click next or see results
      const nextButton = page.getByText(/Next Question|See Results/);
      await nextButton.click();
    }

    // Verify completion screen appears
    await expect(page.getByRole("heading", { name: "Territory Conquered!" })).toBeVisible({
      timeout: 10000,
    });

    // Check score is displayed with any percentage
    await expect(page.getByText(/scored \d+ out of \d+/)).toBeVisible();

    // Verify action buttons are present (use first() to avoid strict mode violation)
    await expect(page.getByText(/Try Again|Choose Another Territory/).first()).toBeVisible();
  });

  test("test different question types", async ({ page }) => {
    await page.goto("/");

    // Start "Apostrophe Forest" (has multiple and tap types)
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Wait for first question
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Test tap question: click a word in sentence
    // Look for the sentence display (amber background box)
    const wordButton = page
      .locator("button")
      .filter({ hasText: /^[a-zA-Z'-]+$/ })
      .first();

    if (await wordButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      // This is a tap question
      await wordButton.click();

      // Verify feedback appears (green or red background)
      await page.waitForTimeout(500);

      // Check for explanation text (use first() to avoid strict mode violations)
      const explanationText = page.locator("text=/explanation|shows|belongs/i").first();
      await expect(explanationText).toBeVisible({ timeout: 3000 });

      // Click next to move to another question
      const nextButton = page.getByText("Next Question");
      if (await nextButton.isVisible({ timeout: 2000 }).catch(() => false)) {
        await nextButton.click();
      }
    }

    // Test multiple choice: click an option button
    const multipleChoiceButton = page
      .locator("button")
      .filter({ hasText: /[.!?]$/ })
      .first();

    if (await multipleChoiceButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      // This is a multiple choice question
      await multipleChoiceButton.click();

      // Verify feedback appears
      await page.waitForTimeout(500);
      await expect(page.locator("text=/explanation|shows|belongs/i").first()).toBeVisible({
        timeout: 3000,
      });
    }
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

    // Answer first question
    const firstAnswer = page
      .locator("button")
      .filter({ hasText: /^[a-zA-Z'-]+$|[.!?]$/ })
      .first();
    await firstAnswer.click();

    await page.waitForTimeout(500);

    // Click next
    const nextButton = page.getByText("Next Question");
    if (await nextButton.isVisible({ timeout: 2000 }).catch(() => false)) {
      await nextButton.click();

      // Check progress updated
      await expect(page.getByText("Question 2 of")).toBeVisible();
    }
  });

  test("quiz displays feedback after answer selection", async ({ page }) => {
    await page.goto("/");

    // Start quiz
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Wait for question
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Select an answer
    const answer = page
      .locator("button")
      .filter({ hasText: /^[a-zA-Z'-]+$|[.!?]$/ })
      .first();
    await answer.click();

    // Wait for feedback
    await page.waitForTimeout(500);

    // Verify explanation text appears (either correct or wrong explanation)
    await expect(page.locator("text=/explanation|shows|belongs/i").first()).toBeVisible({
      timeout: 3000,
    });

    // Verify next button appears after selecting answer
    await expect(page.getByText(/Next Question|See Results/)).toBeVisible({ timeout: 2000 });
  });
});
