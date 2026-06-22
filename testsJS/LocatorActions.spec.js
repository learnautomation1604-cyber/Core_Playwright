import {test} from "@playwright/test"

test("LocatorClick", async ({page}) => {

    await page.goto("https://www.ebay.com");

    // locator.click

    await page.locator("//*[text()='Shop by category']").click();
    await page.locator("//*[text()='Shop by category']").click();


});


test("Doubleclick", async({page}) => {

    await page.goto("https://www.ebay.com");
    // locator. boubleclick()
    await page.locator("//*[text()='Shop by category']").dblclick();

    // locator.check() - Checkbox check
});

test("Checkbox", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('input#male').scrollIntoViewIfNeeded();

    await page.waitForTimeout(3000);

    await page.getByText('Test') // tagname.classvalue, tagname#idvalue



    // locator.check() - Checkbox check

});


// id, name, class, text, class name, css selector, link text, partial link text, x path 
// CSS Selector - Id value based CSS selector, Class Value Based CSS Selector
// X Path - Relative X path and Absolute X path


