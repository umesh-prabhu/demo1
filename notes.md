
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

Commands
npx playwright codegen new.aldi.us