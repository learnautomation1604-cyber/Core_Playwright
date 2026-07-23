import {test, expect} from "@playwright/test"
import { assert } from "node:console";

//displayinfo - Its not a standard playwright javascript keyword - API or Local Method

test.describe("Feature", ()=>{

    test("displayinfo", async({page})=>{
        await page.goto("https://signup.ebay.com/pa/crte?ru=https%3A%2F%2Fwww.ebay.com%2F");
        await page.waitForTimeout(10000);
        await page.locator("//input[@id='businessEmail']").fill("someyhing");
        await page.keyboard.press('Tab')
        const errormessage = await page.locator("//span[@id='businessEmail_err']").innerText();
        console.log(errormessage);
        assert(errormessage, "Email address is invalid. Please enter a valid email address. ");
        console.log("Displayinfo verified")

    });



})