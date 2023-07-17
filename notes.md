https://playwright.dev/docs/navigations
best practices
  await page.goto('https://example.com');

    // waitForSelector example
    await page.waitForSelector('h1'); // Wait for an h1 element to appear on the page

    // waitForNavigation example
    await Promise.all([
      page.waitForNavigation(), // Wait for the next navigation
      page.click('a') // Click on an anchor tag to trigger navigation
    ]);

    // waitForFunction example
    const isButtonDisabled = await page.waitForFunction(() => {
      const button = document.querySelector('button');
      return button.disabled; // Wait until the button becomes disabled
    });

    console.log('Button is disabled:', isButtonDisabled);


Extends Jest's expect .. list here
https://playwright.dev/docs/test-assertions


Chaining locaters
getByRole('navigation').getByRole('link', { name: 'About' })

Cleaner locaters using regex
getByRole('list')
  .filter({ hasText: 'architecturedev reljamstackjavascriptlifestylementoringmotivationnuxtperformance' })
  .getByRole('link', { name: 'architecture' })

  getByRole('list')
  .filter({ hasText: /architecture.*mentoring.*testing/ })
  .getByRole('link', { name: 'architecture' })

Add roles
<ul aria-label="topics">
  //...
</ul>

then

getByRole('list', { name: 'topics' }).getByRole('link', { name: 'architecture' })

Custom ID's
  <div class="inputBox">
    <input data-test-id="username" type="text" required="required">
        <span>Username</span>
  </div>

  then

  await page.getByTestId("username").fill("Butch");          // new way
  await page.locator("data-test-id=username").fill("Butch"); // old way

  Can be changed in config.. does not need to be data-test-id
  # playwright.config.ts
const config: PlaywrightTestConfig = {
  use: {
    browserName: "chromium",
    headless: true,
    screenshot: "only-on-failure",
    testIdAttribute: 'data-test-id',
  },
};

Single test run with speciic title
npx playwright test -g "add a todo item"
Run a set
npx playwright test tests/todo-page/ tests/landing-page/
Run where file name contains myspec or my-spec-2
npx playwright test my-spec my-spec-2
https://playwright.dev/docs/auth