// @ts-check
const { test, expect } = require('@playwright/test');
test.beforeAll(async ({ page }) => {
  console.log('Before tests');
  await page.goto('https://new.aldi.us/');
  await page.getByRole('link', { name: 'Account' }).click();
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('someemail@homail.com');
  await page.getByPlaceholder('Your email address').press('Tab');
  await page.getByPlaceholder('Your password').fill('Aci12345$');
  await page.getByRole('button', { name: 'Log In' }).click();
});
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
