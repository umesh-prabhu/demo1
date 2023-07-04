const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Set the HTTP credentials for the page
  await context.setHTTPCredentials({ username: 'aldiuser', password: 'tokyo' });

  // Navigate to a page that requires authentication
  await page.goto('https://vue.dev.us.cfs.ci-aldi.com/');
  const title = await page.title();
  console.log('Page title:', title);

  // Continue with your automated tasks on the authenticated page
  // ...

  // Close the browser
  await browser.close();
})();
