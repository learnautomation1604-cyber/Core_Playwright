import { test, expect } from '@playwright/test'

// Types of validation in playwright -- Page Validation, Text validation, Visibility Validation.,Input value validation, Attribute validation, CSS Validation, Check box validation, Dropdown validation, Element count validation, Enable/Disable validation, Empty validation, Javascript assertions
// Soft assertions, Hard Assertions


// test('Page Validation', async ({ page }) => {

//     await page.goto('https://www.ebay.com/')
//     await page.waitForTimeout(2000);
//     const title = await page.title()
//     console.log("This is the page title:"+title)
//     const url = page.url()
//     console.log("This is the page Url: "+url)
//     await expect(page).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay')
//     await expect(page).toHaveURL('https://www.ebay.com/')

// });

// test('Text Validation', async ({ page }) => {

//     await page.goto('https://www.ebay.com/');
//     await page.waitForTimeout(2000);
//     const text = await page.textContent('h1')
//     console.log("This is the text content:"+text)
//     await expect(page).toHaveText('h1', 'Electronics, Cars, Fashion, Collectibles & More | eBay')
//     await expect(page.locator('h1')).tocontainText('Electronics, Cars, Fashion, Collectibles & More | eBay')    
// });

// Visibility Validation
// test('Visibility Validation', async ({ page }) => {

//     await page.goto('https://www.ebay.com/');  
//     await page.waitForTimeout(2000);
//     await page.locator("//a[normalize-space()='register']").highlight();
//     await expect(page.locator("//a[normalize-space()='register']")).toBeVisible();
//     await page.waitForTimeout(2000);
//     const footer = page.locator("//*[contains(@class,'gf-big-links__title')]//*[text()='Buy']");
//     // Move the footer element into view
//     await footer.scrollIntoViewIfNeeded();
//     // await expect(page.locator("//a[normalize-space()='register']")).toBeHidden();

// })


// Input value validation

// test('Input value validation', async ({ page }) => {

//     await page.goto('https://www.ebay.com/');
//     await page.waitForTimeout(2000);
//     await page.locator("//input[@id='gh-ac']").fill('Playwright');
//     await page.waitForTimeout(2000);
//     await expect(page.locator("//input[@id='gh-ac']")).toHaveValue('Playwright');
//     await page.waitForTimeout(2000);

// })
// Attribute validation

// test('Attribute validation', async ({ page }) => {
//     await page.goto('https://www.ebay.com/');
//     await page.waitForTimeout(2000);
//     const attributeValue = await page.getAttribute("//input[@id='gh-ac']", 'placeholder');
//     console.log("This is the attribute value: " + attributeValue);
//     await expect(page.locator("//input[@id='gh-ac']")).toHaveAttribute('placeholder', 'Search for anything');
//     await page.waitForTimeout(2000);
// })
// // CSS Validation
// test('CSS Validation', async ({ page }) => {
//     await page.goto('https://www.ebay.com/');
//     await page.waitForTimeout(2000);
//     await page.locator("//input[@id='gh-ac']").highlight();
//     const cssValue = await page.locator("//input[@id='gh-ac']").evaluate((element) => {
//         return window.getComputedStyle(element).getPropertyValue('font-size');
//     });
//     console.log("This is the CSS value: " + cssValue);
//     await page.waitForTimeout(2000);
// })
// Check box validation

// test('Check box validation', async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.locator('input#male').scrollIntoViewIfNeeded();
//     await page.waitForTimeout(3000);
//     await page.locator('input#sunday').check();
//     await page.waitForTimeout(3000);
//     await expect(page.locator('input#sunday')).toBeChecked();
//     await page.waitForTimeout(3000);
//     await page.locator('input#sunday').uncheck();
//     await page.waitForTimeout(3000);
//     await expect(page.locator('input#sunday')).not.toBeChecked();
//     await page.waitForTimeout(3000);
// })


// Dropdown validation


// test("Drop Down Handling", async({page}) =>{
//     await page.goto("https://www.ebay.com");
//     await page.waitForTimeout(6000);
//     await page.locator("//select[@id='gh-cat']").selectOption("Art");
//     await page.waitForTimeout(3000);
//     await page.locator("//select[@id='gh-cat']").selectOption("267");
//     await page.waitForTimeout(3000);
//     await expect(page.locator("//select[@id='gh-cat']")).toHaveValue("267");


// });

// Element count validation


// test("Drop Down Handling", async({page}) =>{
//     await page.goto("https://www.ebay.com");
//     await page.waitForTimeout(6000);
//     const dropdownOptions = await page.locator("//select[@id='gh-cat']//option").count();
//     console.log("This is the count of dropdown options: "+dropdownOptions);
//     await expect(page.locator("//select[@id='gh-cat']//option")).toHaveCount(36); // Hard Assestion
// });


// Enable/Disable validation
// Empty validation

test('Input value validation', async ({ page }) => {

    await page.goto('https://www.ebay.com/');
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='gh-ac']");
    await page.waitForTimeout(2000);
    await expect(page.locator("//input[@id='gh-ac']")).toBeEmpty();
    await page.waitForTimeout(2000);

})

// Javascript assertions // Thisasserions not for UI validation - Only test code value validated

// test('Javascript assertions', async ({ page }) => {

//     const total = 10 + 20;
//     console.log("This is the total value: " + total);
//     expect(total).toBe(30);
//     expect(total).not.toBe(40);
//     expect(total).toBeGreaterThan(20);
//     expect(total).toBeLessThan(40);
//     expect(total).toEqual(30);
//     expect(total).not.toEqual(40);


// })


// Soft assertions

// test('Soft assertions', async ({ page }) => {
//     await page.goto('https://www.ebay.com/');
//     await page.waitForTimeout(2000);
//     const title = await page.title();


//     await expect.soft(title).toBe('Electronics, Cars, Fashion, Collectibles & More | eBay | Official Site');
//     await expect.soft(title).toContain('Electronics, Cars, Fashion, Collectibles & More | eBay | Officia');
//     console.log("This is the page title: "+title);
// });
// Hard Assertions