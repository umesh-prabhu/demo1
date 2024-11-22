import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.bmwusa.com/certified-preowned.html');
  await page.getByRole('link', { name: 'Shop Pre-Owned', exact: true }).click();
  await page.getByLabel('ZIP Code').click();
  await page.getByLabel('ZIP Code').fill('60188');
  await page.getByRole('button', { name: 'Shop Now' }).click();
  await page.getByRole('button', { name: 'Select' }).nth(1).click();
  await page.getByRole('button', { name: 'Close' }).click();
  //await page.getByRole('button', { name: 'Body Style' }).click();
  await page.getByRole('button', { name: 'Series & Models' }).click();
  await page.locator('._series-grid_d1wg9_5320 > label:nth-child(2)').click();
  await page.locator('div').filter({ hasText: /^All Models$/ }).first().click();
  await page.getByRole('listitem').filter({ hasText: 'M294' }).locator('div').click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Fuel Type & Drivetrain' }).click();
  await page.locator('label').filter({ hasText: 'Manual29' }).locator('div').click();
  await page.getByRole('button', { name: 'Shape Sort Order' }).click();
  await page.getByRole('button', { name: 'Nearest Location' }).click();
  await page.evaluate(() => {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
  });
  await page.pause();
  //npx playwright test tests/cpo1.spec.js --headed --project=chromium
});