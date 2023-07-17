import { test, expect } from '@playwright/test';

test('simple hover menu', async ({ page }) => {
  await page.goto('https://new.aldi.us/');
  await page.getByRole('button', { name: 'Recipes' }).hover()
});

 /*
 npx playwright test tests/simple-test.spec.js
 npx playwright test tests/simple-test.spec.js --headed
 npx playwright test tests/simple-test.spec.js --debug
 */

