Feature('Profile tests');

let url = process.profile;

Scenario('login successfull', (I) => {
  I.amOnPage(url+ '/login');
  I.resizeWindow(1980,2500)
  I.wait(1)
  I.fillField('enp_customer_form_login[username]', 'piotr.szmal@enp.pl');
  I.fillField('enp_customer_form_login[password]', 'Testowe1');
  I.click('Zaloguj');
  I.wait(1)
  I.saveScreenshot('screenshot-success.png')
});

Scenario('login failed', (I) => {
  I.amOnPage(url+ '/login');
  I.resizeWindow(1980,2500)
  I.wait(1)
  I.saveScreenshot('screenshot-failed.png')
});
