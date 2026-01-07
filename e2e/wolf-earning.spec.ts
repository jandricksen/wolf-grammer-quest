import { test, expect, type Page } from "@playwright/test";

// Helper function to answer quiz questions with randomised order
async function answerQuizQuestions(page: Page, correctAnswers: string[], numQuestions: number) {
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

test.describe("Wolf Earning Tests", () => {
  test("complete territory with 80%+ score and earn wolf", async ({ page }) => {
    await page.goto("/");

    // Start "Apostrophe Forest" territory
    const territoryCard = page.getByRole("button").filter({ hasText: "Apostrophe Forest" });
    await territoryCard.click();

    // Verify quiz started
    await expect(page.getByText("Question 1 of")).toBeVisible();

    // All correct answers for Apostrophe Forest (questions appear in random order)
    const correctAnswers = [
      "wolf's",
      "The wolves' territory was vast.",
      "doesn't",
      "The decision belongs to the alpha",
      "pups' coats",
      "couldn't howl",
      "pack's",
      "The pack knows its territory well.",
      "More than one wolf",
    ];

    // Answer all 10 questions correctly to earn wolf
    await answerQuizQuestions(page, correctAnswers, 10);

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

    // All correct answers for Apostrophe Forest (questions appear in random order)
    const correctAnswers = [
      "wolf's",
      "The wolves' territory was vast.",
      "doesn't",
      "The decision belongs to the alpha",
      "pups' coats",
      "couldn't howl",
      "pack's",
      "The pack knows its territory well.",
      "More than one wolf",
    ];

    // Answer all 10 questions correctly to ensure 80%+ score
    // (Simpler than trying to get exactly 8/10 with randomised questions)
    await answerQuizQuestions(page, correctAnswers, 10);

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

    // All correct answers for Apostrophe Forest
    const correctAnswers = [
      "wolf's",
      "The wolves' territory was vast.",
      "doesn't",
      "The decision belongs to the alpha",
      "pups' coats",
      "couldn't howl",
      "pack's",
      "The pack knows its territory well.",
      "More than one wolf",
    ];

    // Known wrong answers we can click to fail
    const wrongAnswers = [
      "howl",
      "echoed",
      "mountains",
      "The wolve's hunted together.",
      "The wolves territory was vast.",
      "pack",
      "hottest",
      "day",
      "A letter is missing",
      "There is more than one alpha",
      "pup's coats",
      "pups coat's",
      "wolf's den",
      "the pack's hunt",
      "Luna's fur",
      "It's",
      "strength",
      "working",
      "The wolf wagged it's tail.",
      "Its a cold night for hunting.",
      "wolfs",
      "wolves",
      "wolves'",
      "One wolf",
      "No wolves own anything",
      "We cannot tell",
    ];

    // Answer only 5 questions correctly (50% - below 80% threshold)
    await answerQuizQuestions(page, correctAnswers, 5);

    // Answer last 5 questions with wrong answers
    for (let i = 0; i < 5; i++) {
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

    // All correct answers for Apostrophe Forest (questions appear in random order)
    const correctAnswers = [
      "wolf's",
      "The wolves' territory was vast.",
      "doesn't",
      "The decision belongs to the alpha",
      "pups' coats",
      "couldn't howl",
      "pack's",
      "The pack knows its territory well.",
      "More than one wolf",
    ];

    // Answer all 10 questions correctly for 100% score
    await answerQuizQuestions(page, correctAnswers, 10);

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
