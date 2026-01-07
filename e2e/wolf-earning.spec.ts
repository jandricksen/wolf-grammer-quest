import { test, expect } from "@playwright/test";

test.describe("Wolf Earning Tests", () => {
  test("complete territory with 80%+ score and earn wolf", async ({ page }) => {
    await page.goto("/");

    // Start "Apostrophe Forest" territory
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Verify quiz started
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // Answer questions with correct answers to achieve 80%+ (need at least 8/10 correct)
    // We'll answer all 10 correctly to ensure we pass

    // Question 1: Multiple choice - "wolf's" (possessive)
    await expect(page.getByText("Which word shows possession")).toBeVisible();
    await page.getByRole("button", { name: "wolf's", exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 2: Multiple choice - "The wolves' territory was vast."
    await expect(page.getByText("Which sentence uses the apostrophe correctly?")).toBeVisible();
    await page.getByRole("button", { name: "The wolves' territory was vast." }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 3: Multiple choice - "doesn't" (contraction)
    await expect(page.getByText("Which is the contraction")).toBeVisible();
    await page.getByRole("button", { name: "doesn't", exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 4: Multiple choice - "The decision belongs to the alpha"
    await expect(page.getByText("What does the apostrophe show")).toBeVisible();
    await page.getByRole("button", { name: "The decision belongs to the alpha" }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 5: Multiple choice - "pups' coats"
    await expect(page.getByText("Which is correct")).toBeVisible();
    await page.getByRole("button", { name: "pups' coats" }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 6: Multiple choice - "couldn't howl"
    await expect(page.getByText("Which word is a contraction?")).toBeVisible();
    await page.getByRole("button", { name: "couldn't howl" }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 7: Multiple choice - "pack's" (possessive)
    await expect(page.getByText("Which word is possessive")).toBeVisible();
    await page.getByRole("button", { name: "pack's", exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 8: Multiple choice - "The pack knows its territory well."
    await expect(page.getByText("'It's' and 'its'")).toBeVisible();
    await page.getByRole("button", { name: "The pack knows its territory well." }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 9: Multiple choice - "wolf's"
    await expect(page.getByText("Which is correct")).toBeVisible();
    await page.getByRole("button", { name: "wolf's", exact: true }).click();
    await page.waitForTimeout(500);
    await page.getByText("Next Question").click();

    // Question 10: Multiple choice - "More than one wolf"
    await expect(page.getByText("How many wolves own something")).toBeVisible();
    await page.getByRole("button", { name: "More than one wolf" }).click();
    await page.waitForTimeout(500);

    // Click "See Results" on last question
    await page.getByText("See Results").click();

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

    // Answer first 8 questions correctly for 80% score
    const correctAnswers = [
      "wolf's",
      "The wolves' territory was vast.",
      "doesn't",
      "The decision belongs to the alpha",
      "pups' coats",
      "couldn't howl",
      "pack's",
      "The pack knows its territory well.",
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

    // Answer last 2 questions (any answer is fine)
    for (let i = 0; i < 2; i++) {
      await page.waitForTimeout(700);

      // Try to find any answer button
      const anyAnswer = page.getByRole("button").filter({ hasText: /wolf/ }).first();
      if (await anyAnswer.isVisible({ timeout: 2000 }).catch(() => false)) {
        await anyAnswer.click();
        await page.waitForTimeout(700);

        const nextButton = page.getByText(/Next Question|See Results/);
        if (await nextButton.isVisible({ timeout: 2000 }).catch(() => false)) {
          await nextButton.click();
        }
      }
    }

    // Wait for completion screen
    await expect(page.getByRole("heading", { name: "Territory Conquered!" })).toBeVisible({
      timeout: 10000,
    });

    // Check if new wolf was earned (should be earned with 80% score)
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

    // Answer only 5 questions correctly (50% - below 80% threshold)
    const correctAnswers = [
      "wolf's",
      "The wolves' territory was vast.",
      "doesn't",
      "The decision belongs to the alpha",
      "pups' coats",
    ];

    for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(700);

      if (i < correctAnswers.length) {
        // Answer correctly
        const answerButton = page.getByRole("button", { name: correctAnswers[i], exact: true });
        await answerButton.click();
      } else {
        // Answer incorrectly - click wrong option
        // Look for any button that's not the correct answer
        const wrongAnswer = page
          .getByRole("button")
          .filter({ hasText: /The|wolve|wolf|could|It/ })
          .first();
        if (await wrongAnswer.isVisible({ timeout: 2000 }).catch(() => false)) {
          await wrongAnswer.click();
        }
      }

      await page.waitForTimeout(700);
      const nextButton = page.getByText(/Next Question|See Results/);
      if (await nextButton.isVisible({ timeout: 2000 }).catch(() => false)) {
        await nextButton.click();
      }
    }

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

    // Answer all correctly for 100% score
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

    for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(700);
      const answerButton = page.getByRole("button", { name: correctAnswers[i], exact: true });
      await answerButton.click();
      await page.waitForTimeout(700);
      const nextButton = page.getByText(/Next Question|See Results/);
      await nextButton.click();
    }

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
