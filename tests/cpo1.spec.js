import { test, expect } from '@playwright/test';


  test('test', async ({ page }) => {
    await page.goto('https://www.bmwusa.com/certified-preowned.html');
    await page.getByRole('link', { name: 'Shop Pre-Owned', exact: true }).click();
    await page.getByLabel('ZIP Code').click();
    await page.getByLabel('ZIP Code').fill('60188');
    await page.getByRole('button', { name: 'Shop Now' }).click();
    await page.getByRole('button', { name: 'Select' }).nth(1).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('button', { name: 'Series & Models' }).click();
    await page.locator('._series-grid_d1wg9_5320 > label:nth-child(2)').click();
    await page.getByRole('button', { name: 'Series & Models' }).click();
    await page.getByRole('button', { name: 'Series & Models 1' }).click();
    await page.locator('#series').click();
    await page.locator('body').press('ArrowDown');
    await page.locator('body').press('ArrowDown');
    await page.locator('body').press('ArrowDown');
    await page.locator('body').press('ArrowDown');
    await page.locator('body').press('ArrowDown');
    await page.locator('div').filter({ hasText: /^All Models$/ }).nth(1).click();
    await page.getByRole('listitem').filter({ hasText: 'M298' }).locator('div').click();
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.locator('#series').click();
    await page.getByRole('button', { name: 'Fuel Type & Drivetrain' }).click();
    await page.locator('label').filter({ hasText: 'Manual25' }).locator('div').click();
    await page.pause();
    //npx playwright test tests/cpo1.spec.js --headed --project=chromium --debug
    // then resume stopped in inspector window
    // npx codegen https://www.bmwusa.com/certified-preowned.html
  
  });
