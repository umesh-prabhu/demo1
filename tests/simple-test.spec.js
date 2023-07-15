import { test, expect } from '@playwright/test';

test('simple hover menu', async ({ page }) => {
  await page.goto('https://new.aldi.us/');
  await page.getByRole('button', { name: 'Recipes' }).hover()
});