import {test, expect} from '@playwright/test';


test('focusactions', async ({ page }) => {
    await page.goto('https://www.ebay.com/');
    await page.waitForTimeout(2000);
    await page.locator("//a[@class='gh-search-button__advanced-link']").focus();
    await page.waitForTimeout(2000);

})


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

    // Close the new tab (optional)
    // await newPage.close();

    // Switch back to parent tab (optional)
    // await page.bringToFront();
});

test('Navigation Actions', async ({ page }) => {

    await page.goto('https://www.ebay.com/');
    await page.waitForTimeout(2000);
    await page.locator('#gh-ac').fill('laptop');
    await page.waitForTimeout(2000);
    await page.locator('#gh-search-btn').click();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.goForward();
    await page.waitForTimeout(2000);
    await page.reload();
    await page.waitForTimeout(2000);

})


test('Browser Actions', async ({ page, browser }) => {

    await page.goto('https://www.ebay.com/');
    await page.waitForTimeout(2000);
    await page.locator('#gh-ac').fill('laptop');
    await page.waitForTimeout(2000);
    await page.locator('#gh-search-btn').click();
    await page.waitForTimeout(2000);
    await browser.newContext();
    await page.waitForTimeout(2000);
    await page.context().newPage("https//www.flipkart.com");
    await page.waitForTimeout(2000);
    await page.close();
    await browser.close();

})