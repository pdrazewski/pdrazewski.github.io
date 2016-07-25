module.exports = {
  'CJBDE-89 - searchin problem' : function (browser) {
    browser
    .url('https://b2b.crossjeans.com/de/login')
    .waitForElementVisible('body', 1000)
    .setValue('#enp_customer_form_login_username', 'american.base@gmail.com')
    .setValue('#enp_customer_form_login_password', 'zaq123wsx')
    .submitForm('form[name="enp_customer_form_login"]')
    .url('https://b2b.crossjeans.com/de/vxcxdsa')
    .waitForElementVisible('body', 1000)
    .assert.containsText('.s-headline', 'Leider steht diese Seite zur Zeit nicht zur Verfügung.')
    .end();
  }
}; 
