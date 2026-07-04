import {test, expect} from '@playwright/test'

test('Waiting Actions, Screenshot, Video', async ({ page }) => {

    await page.goto('https://www.ebay.com/');
    await page.waitForTimeout(2000);
    const videoPath = await page.video()?.path();
    console.log("Video Path: " + videoPath);
    await page.waitForTimeout(2000);
     const video = page.video();

    if (video) {
        console.log(await video.path());
    }

    await page.locator("//input[@id='gh-ac']").fill('Iphone 16 Pro');
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='gh-ac']").clear();
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='gh-ac']").type('lenovo laptop');
    await page.waitForTimeout(2000);
    await page.locator("//span[@class='gh-search-button__label']").click();
    await page.locator("//div[@class='srp-save-search']").waitFor({ state: 'visible' });
    await page.locator("//div[@class='srp-save-search']").screenshot({path: 'C:\\Users\\LENOVO\\OneDrive\\Documents\\VSCode\\Playwright\\Saravanan\\Core_Playwright\\screenshot\\srp-save-search.png'});
    const currentpageURL = await page.url();
    await page.waitForURL(currentpageURL);
    await page.waitForLoadState('load') // Wait for the page to load completely
    await page.waitForLoadState('domcontentloaded') // Wait for the DOM content to be loaded
    await page.screenshot({path: 'C:\\Users\\LENOVO\\OneDrive\\Documents\\VSCode\\Playwright\\Saravanan\\Core_Playwright\\screenshot\\screenshot.png', fullPage: true}); // Take a full-page screenshot

    // await page.waitForLoadState('networkidle') // Wait for network activity to be idle



});

