const { test, expect } = require('@playwright/test');

test('Website Test', async ({ page }) => {
  await page.goto('https://testurl.com/');

  // Example 1: Locating an element by ID
  const searchInput = await page.$('#js-site-search-input');
  await searchInput.type('apples');

  // Example 2: Locating an element by CSS selector
  const searchButton = await page.$('.search__icon');
  await searchButton.click();

  // Example 3: Locating an element by XPath
  const productLink = await page.$('//a[contains(text(),"Organic Apples")]');
  await productLink.click();

  // Example 4: Locating multiple elements by CSS selector and performing actions on them
  const productPrices = await page.$$('[data-testid="product-price"]');
  for (const priceElement of productPrices) {
    const priceText = await priceElement.innerText();
    console.log(priceText);
  }

  // Example 5: Locating an element within another element
  const storeLocatorButton = await page.$('.store-finder__cta');
  const locatorLink = await storeLocatorButton.$('a');
  await locatorLink.click();

  // Example 6: Waiting for an element to be visible before interacting with it
  await page.waitForSelector('#store-finder-search-input');
  const locationInput = await page.$('#store-finder-search-input');
  await locationInput.type('New York');

  // Example 7: Locating and interacting with a dropdown/select element
  const radiusSelect = await page.$('#store-finder-search-radius');
  await radiusSelect.selectOption({ value: '20' });

  // Example 8: Locating elements with a specific attribute value
  const resultItems = await page.$$('[data-testid="store-result-item"]');
  console.log(`Number of stores found: ${resultItems.length}`);

  // Perform assertions using Playwright's built-in expect API
  await expect(page).toHaveURL('https://new.aldi.us/store-finder');
  await expect(resultItems.length).toBeGreaterThan(0);
});
