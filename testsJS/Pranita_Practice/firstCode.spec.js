// import {test} from "@playwright/test"

// test("LocatorClick", async ({page})=>{

//     await page.goto("https://practicetestautomation.com/");

//     // locator.click

//     //await page.locator("//*[text() ='Practice']").click();

//     //DoubleClick

//     await page.locator("//*[text() ='Practice']").dblclick();

// })


//Check, Uncheck Locators
// import {test} from "@playwright/test"
// test("check uncheck action", async ({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.locator('input#male').scrollIntoViewIfNeeded();
//     await page.waitForTimeout(3000);
//     await page.locator('input#wednesday').check();
//     await page.waitForTimeout(3000);
//     await page.locator('input#wednesday').uncheck();
//     await page.waitForTimeout(3000);
    

    //Fill Text Fields
// import {test} from "@playwright/test"
// test("fill action", async ({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
// await page.locator('#name').fill('Pranita');
// await page.waitForTimeout(3000);
// await page.locator('#email').fill('Pranita@gmail.com');
// await page.waitForTimeout(3000);
// await page.locator('#phone').fill('8806543210');
// await page.waitForTimeout(3000);
// });



//Radio Button Action
// import {test} from "@playwright/test"
// test("Radio button check action", async ({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.locator('input#male').scrollIntoViewIfNeeded();
//     await page.locator('#male').check();
//     await page.waitForTimeout(3000);
//     page.locator("#monday").check();
//     await page.waitForTimeout(3000);
//     page.locator("#friday").check();
//     await page.waitForTimeout(3000);
//     });


    //Select Option
    // import {test} from "@playwright/test"
    // test("Check button check action", async ({page}) => {
    // await page.goto("https://testautomationpractice.blogspot.com/");
    // page.locator("#country").selectOption("India");
    // await page.waitForTimeout(3000);
    // });


    //Date picker
    // import {test} from "@playwright/test"
    // test("Date picker action", async ({page}) => {
    // await page.goto("https://testautomationpractice.blogspot.com/");
    // page.locator("#datepicker").fill("06/30/2026");
    // await page.waitForTimeout(3000);
    // });

    
    //Hover Action
//    import { test } from "@playwright/test";
//    test("Hover action", async ({ page }) => {
//      await page.goto("https://testautomationpractice.blogspot.com/");
//      page.locator("button:has-text('Point Me')").hover();
//        page.getByText("Mobiles").click();
//      await page.waitForTimeout(3000);
//  });


//Right Click Action
    // import {test} from "@playwright/test"
    // test("RightClick action", async ({page}) => {
    // await page.goto("https://testautomationpractice.blogspot.com/");
    // page.locator("#element").click(new Locator.ClickOptions().setButton(MouseButton.RIGHT));
    // await page.waitForTimeout(3000);
    // });


//Single upload Action
import {test} from "@playwright/test"
    test("upload action", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.locator("#singleFileInput").setInputFiles(Paths.get("test-data/test.pdf"));
page.getByRole(AriaRole.BUTTON,new Page.GetByRoleOptions().setName("Upload Single File")).click();
 });



 //Multiple file upload
// import {test} from "@playwright/test"
//     test("upload action", async ({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//  page.locator("#multipleFilesInput").setInputFiles(new Path[]{
//         Paths.get("test-data/resume.pdf"),
//         Paths.get("test-data/image.png")
//     });

// page.getByRole(AriaRole.BUTTON,
//     new Page.GetByRoleOptions().setName("Upload Multiple Files")).click();
//     });