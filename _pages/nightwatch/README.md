BrowserStack-nightwatch
=========

Sample for using nightwatch with BrowserStack Automate.

###Install nightwatch.js
*Starting and prerequisite: [nightwatch]*
- `npm install`

###Configuring the json
 - Open `nightwatch.conf.js` or `nightwatch_local.conf.js`
 - Add `browserstack.user` and `browserstack.key` with your BrowserStack credentials. Don't have one? Get one on BrowserStack [dashboard]
 - Add / customise more [capabilities] to `desiredCapabilities` in `settings.json`

###Sample test
 - To start a single test run: `npm test` or `npm run test_single`
 - To start parallel tests run: `npm run test_parallel`
 - To start local tests run: `npm run test_local`

[nightwatch]:http://nightwatchjs.org/guide
[capabilities]:http://www.browserstack.com/automate/capabilities
[dashboard]:https://www.browserstack.com/automate
