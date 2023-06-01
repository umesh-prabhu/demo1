import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://help.aldi.us/s/gift-card-balance')
  page.waitForLoadState('domcontentloaded')
  await page.screenshot({ path: 'gift-card-page.png', fullPage: true });
  console.log('umesh test')
  await page.goto('https://new.aldi.us/');
  const xx = await page.getByRole('button', { name: 'Create Account' }).click()
console.log('xx',xx)
});