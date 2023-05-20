import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  //await page.getByRole('link', { name: 'Get started' }).click();
  await page.goto('https://help.aldi.us/s/gift-card-balance')
  page.waitForLoadState('domcontentloaded')
  await page.screenshot({ path: 'gift-card-page.png', fullPage: true });
});