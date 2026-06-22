import {test} from "@playwright/test"


test("This is my first test", async ({page})=>{

    await page.goto("https://www.ebay.com");

})


