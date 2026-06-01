import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://www.ebay.com');

  const pagetitle = await page.title();
  console.log(pagetitle)

  await expect(page).toHaveTitle("Electronics, Cars, Fashion, Collectibles & More | eBay");

});

test('get started link', async ({ page }) => {

  await page.goto('https://www.ebay.com');


});
