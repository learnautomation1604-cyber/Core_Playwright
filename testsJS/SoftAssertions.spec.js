import { test, expect } from "@playwright/test";
import { assert, time } from "node:console";

test.describe("Soft Assertions", () => {

    // test("Soft Assertions", async ({ page }) => {
    //     await page.goto("https://practice-automation.com");
    //     await page.waitForTimeout(2000);

    //     try {
    //         await page.locator("//a[normalize-space()='Popupsdffg']").click({ timeout: 2000 });
    //     } catch (e) {
    //         console.log("Element not found");
    //     }

    // });
    
    // test("Soft Assertions2", async ({ page }) => {
    //     await page.goto("https://practice-automation.com");
    //     await page.waitForTimeout(2000);
    //     const isElementVisible = await page.locator("//a[normalize-space()='Popupsdf']").isVisible();
    //     if (!isElementVisible) {
    //         console.log("Element not found");
    //     }else{
    //         await page.locator("//a[normalize-space()='Popups']").click();
    //     }
    // });
test('Tab and Window Handling', async ({ page }) => {

    await page.goto('https://www.ebay.com/');

    await page.locator('#gh-ac').fill('laptop');
    await page.locator('#gh-search-btn').click();

    // Get current page title
    const currentPageTitle = await page.title();
    console.log("Current Page Title: " + currentPageTitle);

    // Wait for new tab
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("(//div[@class='su-image'])[3]").click()
    ]);

    await newPage.waitForLoadState();

    // Get new page title
    const newPageTitle = await newPage.title();
    console.log("New Page Title: " + newPageTitle);

    // Switch to the new tab
    await newPage.bringToFront();
    await newPage.locator("//a[@href='#ABOUT_THIS_ITEM']//span[@class='ux-textspans ux-textspans--PSEUDOLINK']").click();
    await newPage.waitForTimeout(3000);
    // Soft Assertion
    const actualprocessor = await newPage.locator("//span[normalize-space()='Intel Core i5-8250U']").innerText();
    console.log(actualprocessor)
    const expectedProcessor = "Intel Core i7-8250U"
    const proass = assert(actualprocessor, expectedProcessor)
    if(!proass){
        console.log("Processor not same as we expected")
    }

    const actualSSDCap = await newPage.locator("//span[normalize-space()='256 GB']").innerText();
    console.log(actualSSDCap);
    const expectedSSD = "512 GB"
    const ssd = assert(actualSSDCap, expectedSSD)

    if(!ssd){
        console.log("SSD not same as we expected")
    }



    const releaseyear = await newPage.locator("//span[normalize-space()='2018']").innerText();
    console.log(releaseyear);
    const expectedyear = "2018"
    const rel = assert(releaseyear, expectedyear);

    if(!rel){
        console.log("year not same as we expected")
    }else if(rel){
        console.log("year same as we expected")

    }






 
});

});