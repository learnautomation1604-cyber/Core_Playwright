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
    await page.locator('input#sunday').check();
    await page.waitForTimeout(3000);
    await page.locator('input#sunday').uncheck();
    await page.waitForTimeout(3000);
    // locator.check() - Checkbox check

});


test("hover, Highlight", async({page}) => {

    await page.goto("https://www.ebay.com");

    await page.waitForTimeout(3000);
    await page.locator("(//div[@class='gh-flyout is-right-aligned gh-flyout--icon-target'])[2]").hover();
    await page.locator("(//div[@class='gh-flyout is-right-aligned gh-flyout--icon-target'])[2]").highlight();

    await page.waitForTimeout(3000);

    // locator.check() - Checkbox check

});


test("fill Value", async({page}) => {

    await page.goto("https://www.ebay.com");
    await page.waitForTimeout(3000);
    await page.locator("input#gh-ac").fill("i Phone 16 Pro");
    await page.waitForTimeout(3000);
    await page.locator("//button[@class='gh-search-button btn btn--primary']").click();
    await page.waitForTimeout(3000);

    // locator.check() - Checkbox check

});

// press(Enter), Press(Down)
// tap()
//focus()
// blur()
// SelectOption(values)
// selectInputFields(file)



// id, name, class, text, class name, css selector, link text, partial link text, x path 
// CSS Selector - Id value based CSS selector, Class Value Based CSS Selector
// X Path - Relative X path and Absolute X path


