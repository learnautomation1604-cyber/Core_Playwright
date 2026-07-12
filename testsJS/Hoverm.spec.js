import {test} from "@playwright/test"

test("Hover",async({page})=>{
    await page.goto("https://www.ebay.com");
    await page.locator("//span[@class='gh-search-button__label']").highlight();
    await page.waitForTimeout(2000);
    await page.locator("//span[normalize-space()='Electronics']").hover();
    await page.waitForTimeout(2000);
    // await page.locator("//span[normalize-space()='Electronics']").click({button:'right'});
    // await page.waitForTimeout(2000);
    await page.mouse.move(300,500, {steps:50});
    await page.waitForTimeout(2000);
    // await page.locator("//a[normalize-space()='Buy']").scrollIntoViewIfNeeded();
    await page.mouse.wheel(0,600);
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,-600);
    await page.waitForTimeout(2000);
});