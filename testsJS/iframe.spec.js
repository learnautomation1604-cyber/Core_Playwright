import {test} from '@playwright/test';

test('Iframe, Actions Option', async ({ page }) => {

    await page.goto('https://practice-automation.com/iframes/');
    await page.waitForTimeout(2000);
    const frame = page.frameLocator("//iframe[@id='iframe-1']");
    const iframefield = await frame.locator("//a[normalize-space()='Docs']");
    await iframefield.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await iframefield.highlight();
    await page.waitForTimeout(2000);
    await iframefield.focus();
    await page.waitForTimeout(2000);
    await iframefield.click();

    await page.waitForTimeout(2000);




    // await page.locator("//a[normalize-space()='Docs']").click();
    await page.waitForTimeout(2000); 



});