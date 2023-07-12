
docs
https://playwright.dev/docs/intro

Channel
https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg

https://playwright.dev/docs/accessibility-testing
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



Commands
npx playwright codegen new.aldi.us
npx playwright test --headed
npx playwright test --debug

npx playwright show-report
https://playwright.dev/docs/test-annotations#custom-annotations

npx playwright test --help

Single test run with speciic title
npx playwright test -g "add a todo item"
Single test file run
npx playwright test tests/todo-page.spec.ts
Run a set
npx playwright test tests/todo-page/ tests/landing-page/
Run where file name contains myspec or my-spec-2
npx playwright test my-spec my-spec-2
https://playwright.dev/docs/auth