import {test, expect} from "@playwright/test"

test.describe("Alert Popup", () => {


    test("Dialogue Actions", async ({ page }) => {
        await page.goto("https://practice-automation.com");
        await page.waitForTimeout(2000);
        await page.locator("//a[normalize-space()='Popups']").click();
        await page.waitForTimeout(2000);
        const popup =await page.locator("//b[normalize-space()='Alert Popup']").click();
        await page.waitForTimeout(2000);
            // Listen for the dialog
        page.once('dialog', async dialog => {
        console.log(dialog.message()); // Prints the alert text
        await dialog.accept();         // Clicks OK
         });

        await page.waitForTimeout(2000);


    })

    test("Alert Popup with Actions", async ({ page }) => {
        await page.goto("https://practice-automation.com/alerts/");

    })



})