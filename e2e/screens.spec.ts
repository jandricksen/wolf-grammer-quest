import { test, expect } from "@playwright/test";

test.describe("Screen Loading Tests", () => {
  test("home screen loads with territories", async ({ page }) => {
    await page.goto("/");

    // Verify page title
    await expect(page.getByText("Wolf Grammar Quest")).toBeVisible();

    // Check all 11 territory cards are visible
    await expect(page.getByText("Apostrophe Forest")).toBeVisible();
    await expect(page.getByText("Clause Canyon")).toBeVisible();
    await expect(page.getByText("Noun Thicket")).toBeVisible();
    await expect(page.getByText("Verb Valley")).toBeVisible();
    await expect(page.getByText("Adjective Glade")).toBeVisible();
    await expect(page.getByText("Adverb Trail")).toBeVisible();
    await expect(page.getByText("Pronoun Peak")).toBeVisible();
    await expect(page.getByText("Conjunction Creek")).toBeVisible();
    await expect(page.getByText("Prefix & Suffix Summit")).toBeVisible();
    await expect(page.getByText("Comma Cave")).toBeVisible();
    await expect(page.getByText("Speech Cavern")).toBeVisible();

    // Verify Luna (starter wolf) appears in pack preview
    await expect(page.getByText("Luna")).toBeVisible();

    // Check navigation buttons exist
    await expect(page.getByText("View Full Pack")).toBeVisible();
    await expect(page.getByText("View Inventory")).toBeVisible();
  });

  test("pack screen loads", async ({ page }) => {
    await page.goto("/");

    // Click "View Full Pack" button
    await page.getByRole("button", { name: "View Full Pack" }).click();

    // Verify "Your Wolf Pack" heading
    await expect(page.getByRole("heading", { name: "Your Wolf Pack" })).toBeVisible();

    // Check Luna is displayed with trait
    await expect(page.getByText("Luna")).toBeVisible();

    // Verify at least one wolf is visible with trait
    const wolfCard = page.locator("button").filter({ hasText: "Luna" });
    await expect(wolfCard).toBeVisible();

    // Check back button exists
    await expect(page.getByRole("button", { name: "Back to Map" })).toBeVisible();
  });

  test("inventory screen loads", async ({ page }) => {
    await page.goto("/");

    // Click "View Inventory" button
    await page.getByRole("button", { name: "View Inventory" }).click();

    // Verify "Your Inventory" heading
    await expect(page.getByRole("heading", { name: "Your Inventory" })).toBeVisible();

    // Check all 4 treat types are listed (look for the treat names in the main list, not in the "how to earn" section)
    await expect(page.getByText("Meat Chunk").first()).toBeVisible();
    await expect(page.getByText("Wisdom Berry").first()).toBeVisible();
    await expect(page.getByText("Swift Meat").first()).toBeVisible();
    await expect(page.getByText("Golden Kibble").first()).toBeVisible();

    // Verify "How to earn" section exists
    await expect(page.getByText("How to earn treats")).toBeVisible();

    // Check back button
    await expect(page.getByRole("button", { name: "Back to Map" })).toBeVisible();
  });

  test("wolf detail screen loads", async ({ page }) => {
    await page.goto("/");

    // Navigate to pack screen
    await page.getByRole("button", { name: "View Full Pack" }).click();

    // Wait for pack screen to load
    await expect(page.getByRole("heading", { name: "Your Wolf Pack" })).toBeVisible();

    // Click on Luna (find the clickable wolf card, not just the text)
    // Look for a button or clickable element that contains Luna
    const lunaCard = page.locator("button").filter({ hasText: "Luna" }).first();
    await lunaCard.click();

    // Verify wolf name is displayed
    await expect(page.getByRole("heading", { name: "Luna" })).toBeVisible();

    // Check wolf fact is shown (look for the wolf fact section)
    await expect(page.getByText(/wolves|pack/i).first()).toBeVisible();

    // Verify trait is displayed (Luna has courage trait as Alpha)
    await expect(page.getByText("Defining Trait")).toBeVisible();
    await expect(page.getByText("courage").first()).toBeVisible();

    // Check back button
    await expect(page.getByRole("button", { name: "Back to Pack" })).toBeVisible();
  });

  test("navigation between screens works", async ({ page }) => {
    await page.goto("/");

    // Home -> Pack
    await page.getByText("View Full Pack").click();
    await expect(page.getByText("Your Wolf Pack")).toBeVisible();

    // Pack -> Home
    await page.getByText("Back to Map").click();
    await expect(page.getByText("Choose Your Territory")).toBeVisible();

    // Home -> Inventory
    await page.getByText("View Inventory").click();
    await expect(page.getByText("Your Inventory")).toBeVisible();

    // Inventory -> Home
    await page.getByText("Back to Map").click();
    await expect(page.getByText("Choose Your Territory")).toBeVisible();
  });
});
