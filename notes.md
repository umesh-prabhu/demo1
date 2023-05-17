
docs
https://playwright.dev/docs/intro

Channel
https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg

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

                

Commands
npx playwright codegen new.aldi.us