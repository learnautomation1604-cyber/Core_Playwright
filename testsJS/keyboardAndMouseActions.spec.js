import{test} from '@playwright/test'



// test('KeyBoardActions', async({page})=>{

//     // Keyboard Actions -- Type text
//     await page.goto('https://www.ebay.com/')
//     await page.waitForTimeout(2000);
//     await page.locator("//input[@id='gh-ac']").fill('Iphone 16 Pro');
//     await page.waitForTimeout(2000);
//     await page.locator("//input[@id='gh-ac']").clear();
//     await page.waitForTimeout(2000);
//     await page.locator("//input[@id='gh-ac']").type('lenovo laptop');
//     await page.waitForTimeout(2000);


//     // press a key

//     await page.keyboard.press('ArrowDown')
//     await page.waitForTimeout(2000);
//     await page.keyboard.press('ArrowDown')
//     await page.waitForTimeout(2000);
//     await page.keyboard.press('ArrowDown')
//     await page.waitForTimeout(2000);
//     // Press a key combition
//     await page.keyboard.press('Tab')
//     await page.waitForTimeout(2000);
//     await page.keyboard.press('Control+A')
//     await page.waitForTimeout(2000);



//     // Hold key ""
//     // Press Arrow Keys
//     // Tab Navigation
//     // Insert a new line

// });



test('MouseActions', async({page})=>{

    // Click
    await page.goto('https://www.ebay.com/')
    await page.waitForTimeout(2000);
    // Double click
    // Right Click
    // Hover
    // Mouse Move
    // Drag and Drop

    // await page.locator("//p[normalize-space()='Drag me to my target']").dragTo(page.locator("//div[@id='droppable']"));
    // await page.locator("").isVisible();
  
    // Mouse Down
    await page.locator("//input[@id='gh-ac']").fill('Iphone 16 Pro');
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='gh-ac']").clear();
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='gh-ac']").type('lenovo laptop');
    await page.waitForTimeout(2000);
    await page.mouse.down();
    await page.waitForTimeout(3000)
    await page.mouse.down();
    await page.waitForTimeout(3000)
    await page.mouse.down();
    await page.waitForTimeout(3000)
    await page.mouse.down();
    await page.waitForTimeout(3000)

    // Mouse Up
    await page.mouse.up();
    await page.mouse.up();
    await page.mouse.up();
    await page.mouse.up();
    // Mouse Wheel
    await page.mouse.wheel(0,-1000);
    await page.waitForTimeout(7000);

});