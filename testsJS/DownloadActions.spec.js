import {test, expect} from '@playwright/test';  


test('DownloadActions, Actions Option', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html'); 
    await page.waitForTimeout(2000);
    await page.locator("//textarea[@id='inputText']").fill('Hello World', timeout=5000);
    await page.waitForTimeout(2000);
    await page.locator("//button[@id='generateTxt']").click(force=true,timeout=5000,button='left');

    // force - Forces the action to be performed, bypassing any checks that would normally prevent it. This can be useful in situations where you want to interact with an element that may not be visible or enabled.
    // timeout - Specifies the maximum time to wait for the action to complete. If the action does not complete within this time, an error will be thrown.
    // trial - Specifies the mouse button to use for the action. The default is 'left', but you can also specify 'right' or 'middle'.
    // nowaitAfter - Specifies whether to wait for the action to complete before proceeding. If set to true, the action will be performed asynchronously, and the test will continue without waiting for it to finish.
    // modifiers - Specifies any modifier keys to hold down while performing the action. This can be useful for simulating keyboard shortcuts or other complex interactions.
    // button - Specifies which mouse button to use for the action. The default is 'left', but you can also specify 'right' or 'middle'.
    // clickCount - Specifies the number of times to click the element. The default is 1, but you can specify a higher number for double-clicking or other multi-click actions.
    // delay - Specifies the amount of time to wait between clicks when performing a multi-click action. This can be useful for simulating user behavior or testing timing-sensitive interactions.
    // position - Specifies the position within the element to click. This can be useful for clicking on specific parts of an element, such as a button or link.

    const downloadfile = await page.locator("//a[@id='txtDownloadLink']").click()
    await page.waitForTimeout(2000);





});