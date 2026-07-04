// Assertions in Playwright
// An Assertion in Playwright is used to verify that the application behaves as expected. Assertions compare the actual result with the expected result. If they match, the test passes; otherwise, it fails.

//toBeVisible()
import { test, expect } from '@playwright/test';
test('Login button visibility', async ({ page }) => {
await page.goto('https://demo.nopcommerce.com/login');
await expect(page.locator("//button[text()='Log in']")).toBeVisible();
});