import {test,expect} from '@playwright/test';

// Define cookies - Cookies are small pieces of data stored by the browser that can be used to remember user preferences, login sessions, and other information.

test('CookiesActions', async ({ page, context }) => {

    await page.goto('https://www.ebay.com/');
    await page.waitForTimeout(2000);
    await page.locator('#gh-ac').click();
    await page.waitForTimeout(2000);
    await context.addCookies([
        {
    name: 'myCookie',
    value: 'myValue',
    domain: '.ebay.com',
    path: '/'
        }
    ]);

    await context.cookies().then(cookies => {
        // console.log('Cookies:', cookies);
    });

    await context.clearCookies();


    await context.cookies().then(cookies => {
        console.log('Cookies:', cookies);
    });
        await context.addCookies([
        {
    name: 'myCookie',
    value: 'myValue',
    domain: '.ebay.com',
    path: '/'
        }
    ]);
        await context.cookies().then(cookies => {
        console.log('Cookies:', cookies);
    });
  


    // await context.clearCookies();
    // await context.addCookies();
    // await context.cookies();



});


