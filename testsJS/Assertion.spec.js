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

test('Text Validation', async ({ page }) => {

    await page.goto('https://www.ebay.com/');
    await page.waitForTimeout(2000);
    const text = await page.textContent('h1')
    console.log("This is the text content:"+text)
    await expect(page).toHaveText('h1', 'Electronics, Cars, Fashion, Collectibles & More | eBay')
    await expect(page.locator('h1')).tocontainText('Electronics, Cars, Fashion, Collectibles & More | eBay')    
});