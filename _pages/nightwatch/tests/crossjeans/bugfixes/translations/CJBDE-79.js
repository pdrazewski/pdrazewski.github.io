module.exports = {
  before : function (browser) {
    browser.resizeWindow(1680, 1200);
  },
  'CJBDE-79 - please Translate it' : function (browser) {
    browser
    .url('https://b2b.crossjeans.com/de/login')
    .waitForElementVisible('body', 1000)
    .setValue('#enp_customer_form_login_username', 'american.base@gmail.com')
    .setValue('#enp_customer_form_login_password', 'zaq123wsx')
    .submitForm('form[name="enp_customer_form_login"]')
    .url('https://b2b.crossjeans.com/de/damen/jeans/skinny')
    .waitForElementVisible('body', 1000)
    .assert.containsText('.js-filters_toggle span', 'Einblenden')
    .assert.containsText('.js-filters_toggle span', 'Einblenden')
    .assert.value(".m-filters_submit", 'Filtern')
    .assert.containsText('a[href="/de/damen/jeans/skinny?limit=0"]', 'Alles')
    .end();
  }
}; 
