import { test, expect } from "@playwright/test";

test.describe("Hunger System", () => {
  test("new wolf starts as ready (not hungry)", async ({ page }) => {
    await page.goto("/");

    // View the initial wolf (Luna)
    await page.getByText("View Full Pack").click();
    await expect(page.getByText("Your Wolf Pack")).toBeVisible();

    // Click on Luna to view details
    await page.getByText("Luna").first().click();

    // Verify wolf is in ready state (not hungry)
    await expect(page.getByText("✓ Ready")).toBeVisible();
    await expect(page.getByText("This wolf is well-fed and ready for action.")).toBeVisible();

    // Feed button should be disabled because wolf is not hungry
    const feedButton = page.getByRole("button", { name: "Already Fed" });
    await expect(feedButton).toBeVisible();
    await expect(feedButton).toBeDisabled();
  });

  test("wolf detail screen shows hunger status section", async ({ page }) => {
    await page.goto("/");

    await page.getByText("View Full Pack").click();
    await page.getByText("Luna").first().click();

    // Verify Status section exists
    await expect(page.getByText("Status").first()).toBeVisible();

    // Should show either Ready or Hungry status
    const statusIndicator = page.locator("text=/✓ Ready|🍖 Hungry/");
    await expect(statusIndicator).toBeVisible();

    // Should show time since fed
    await expect(page.locator("text=/Fed \\d+h ago|\\d+h since fed/")).toBeVisible();
  });

  test("feed button shows correct states", async ({ page }) => {
    await page.goto("/");

    // Navigate to wolf detail
    await page.getByText("View Full Pack").click();
    await page.getByText("Luna").first().click();

    // Initially wolf is not hungry, button should say "Already Fed"
    const alreadyFedButton = page.getByRole("button", { name: "Already Fed" });
    await expect(alreadyFedButton).toBeVisible();
    await expect(alreadyFedButton).toBeDisabled();
  });

  test("pack screen shows wolf cards with trait display", async ({ page }) => {
    await page.goto("/");

    await page.getByText("View Full Pack").click();
    await expect(page.getByText("Your Wolf Pack")).toBeVisible();

    // Should show Luna with her role and trait
    await expect(page.getByText("Luna")).toBeVisible();
    await expect(page.getByText("Alpha")).toBeVisible();

    // Should have trait display (courage for Alpha)
    const traitDisplay = page.locator("text=/courage|wisdom|swiftness|kindness|focus/").first();
    await expect(traitDisplay).toBeVisible();
  });

  test("pack screen shows member count", async ({ page }) => {
    await page.goto("/");

    await page.getByText("View Full Pack").click();

    // Should show "1 members strong" for starting wolf
    await expect(page.getByText("1 members strong")).toBeVisible();
  });
});
