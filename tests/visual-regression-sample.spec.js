import { test, expect } from '@playwright/test';

test('visual regression test', async ({ page }) => {
   await page.goto('https://playwright.dev/')
   page.waitForLoadState('domcontentloaded')
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await expect(page).toHaveScreenshot()
});
