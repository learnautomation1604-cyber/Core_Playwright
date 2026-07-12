//Keyboard Actions
//Type Text
// import {test} from "@playwright/test"
// test("keyboard action", async ({page}) => {
// await page.goto("https://testautomationpractice.blogspot.com/");
// await page.locator('#name').click();
// await page.keyboard.type('John Smith');
// await page.waitForTimeout(3000);

 //Press Tab

// await page.keyboard.press('Tab');
// await page.keyboard.type('john@gmail.com');
// await page.waitForTimeout(3000);

//Press Enter
// await page.keyboard.press('Enter');
// await page.waitForTimeout(3000);

//Select All + Delete
// await page.locator('#name').click();
// await page.keyboard.press('Control+A');
// await page.waitForTimeout(3000);
// await page.keyboard.press('Backspace');
// await page.waitForTimeout(3000);

//Hold a Key
// await page.keyboard.down('Shift');
// await page.waitForTimeout(3000);
// await page.keyboard.press('KeyA');
// await page.waitForTimeout(3000);
// await page.keyboard.up('Shift');
// await page.waitForTimeout(3000);

//Arrow Keys
// page.locator("#country").selectOption("India");
// await page.waitForTimeout(3000);
// await page.keyboard.press('ArrowDown');
// await page.waitForTimeout(3000);
// await page.keyboard.press('ArrowUp');
// await page.waitForTimeout(3000);

//  });


 //Mouse Action

 //Click action
import {test} from "@playwright/test"
test("keyboard action", async ({page}) => {
await page.goto("https://testautomationpractice.blogspot.com/");
// await page.locator('#name').click();
// await page.keyboard.type('John Smith');
// await page.waitForTimeout(3000);


//double click
// await page.locator("button:has-text('Copy Text')").dblclick();
// await page.waitForTimeout(3000);

//Right click
// await page.locator('#male').click({button: 'right'});
// await page.waitForTimeout(3000);

//hover action

// await page.locator("label[for='male']").hover();
// await page.waitForTimeout(3000);

//Mouse Move
// await page.mouse.move(300, 300);
// await page.waitForTimeout(3000);
// await page.mouse.move(500, 300);
// await page.waitForTimeout(3000);


//Mouse Wheel Scroll
await page.mouse.wheel(0, 800);
await page.waitForTimeout(3000);
await page.mouse.wheel(0, -800);
await page.waitForTimeout(3000);
});