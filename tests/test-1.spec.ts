import { test, expect } from '@playwright/test';

test('umesh test1', async ({ page }) => {
    //await page.goto('https://help.aldi.us/s/gift-card-balance')
    await page.goto('https://playwright.dev/')
   page.waitForLoadState('domcontentloaded')
  await page.screenshot({ path: 'gift-card-page.png', fullPage: true });
  await expect(page).toHaveScreenshot()
  // await expect(page).toHaveScreenshot('gift-card-page.png')
  console.log('umesh test')
 /*  await page.goto('https://new.aldi.us/');
  let xx =  await page.getByRole('link', { name: 'Account' })
await xx.focus();
xx = await page.getByRole('button', { name: 'Log in' })
  console.log('xx',xx) */
});