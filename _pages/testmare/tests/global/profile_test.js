const helpers = require('../../helpers.js');

Feature('User profile tests');
/*

User profile scenarios:
1. I have successfully logged in with login and password
2. I failed to login with random data
3. I requested a new password for gfx@enp.pl
4. I registered a new account
5. I have successfully sign in to newsletter


*/

/* 1. I have successfully logged in with login and password */
helpers.sizes.forEach(function(size){
  let paths = helpers.generateLinks("login-success", size);
  Scenario(size + ': I have successfully logged in with login and password ', (I) => {
      I.amOnPage(helpers.url+ '/logout');
      I.amOnPage(helpers.url+ '/login');
      I.resizeWindow(size, 1900)  
      I.fillField('enp_customer_form_login[username]', 'gfx@enp.pl');
      I.fillField('enp_customer_form_login[password]', 'Anakonda123');
      I.click('form[name=enp_customer_form_login] [type=submit]');
      I.wait(2);     
      I.amOnPage(helpers.url+ '/profile');
      I.saveScreenshot(paths.screenPath1); 
      I.scrollTo('.b-footer'); 
      I.saveScreenshot(paths.screenPath2); 
      I.see("Twoje konto");
  });
});

/* 2. I failed to login with random data */
helpers.sizes.forEach(function(size){
  let paths = helpers.generateLinks("login-failed", size);
  Scenario(size + ': I failed to login with random data', (I) => {
      I.amOnPage(helpers.url+ '/logout');
      I.amOnPage(helpers.url+ '/login');
      I.resizeWindow(size, 1900)  
      I.fillField('enp_customer_form_login[username]', helpers.faker.internet.email());
      I.fillField('enp_customer_form_login[password]', helpers.faker.name.findName());
      I.executeScript(function(){
          document.querySelectorAll('form[name=fos_user_registration]')[0].submit();
      });
      I.wait(3);    
      I.saveScreenshot(paths.screenPath1); 
      I.scrollTo('.b-footer'); 
      I.saveScreenshot(paths.screenPath2); 
      I.dontSee("Twoje konto");
  });
});

/* 3. I requested a new password for gfx@enp.pl */
helpers.sizes.forEach(function(size){
  let paths = helpers.generateLinks("reset-pass", size);
  Scenario(size + ': I requested a new password for gfx@enp.pl', (I) => {
      I.amOnPage(helpers.url+ '/logout');
      I.amOnPage(helpers.url+ '/resetting');
      I.resizeWindow(size, 1900)  
      I.fillField('enp_customer_reset_password_request[username]', helpers.faker.internet.email());
      I.click('form[name=enp_customer_reset_password_request] [type=submit]');
      I.wait(1);    
      I.saveScreenshot(paths.screenPath1); 
      I.scrollTo('.b-footer'); 
      I.saveScreenshot(paths.screenPath2); 
      I.dontSee("Przypomnij hasło");
  });
});

/* 4. I registered a new account */
helpers.sizes.forEach(function(size){
  let paths = helpers.generateLinks("register", size);
  Scenario(size + ': I registered a new account ', (I) => {
      I.amOnPage(helpers.url+ '/logout');
      I.amOnPage(helpers.url+ '/register');
      I.resizeWindow(size, 1900)  
      I.click('form[name=fos_user_registration] [type=submit]');
      I.wait(1);    
      I.saveScreenshot(paths.screenPath1); 
      I.scrollTo('.b-footer'); 
      I.saveScreenshot(paths.screenPath2); 
  });
});

/* 5. I have successfully sign in to newsletter from newsletter page */
helpers.sizes.forEach(function(size){
  let paths = helpers.generateLinks("newsletter", size);
  Scenario(size + ': I have successfully sign in to newsletter from newsletter page ', (I) => {
      I.amOnPage(helpers.url+ '/newsletter');
      I.resizeWindow(size, 1900)  
      I.fillField('fos_user_registration[email]', helpers.faker.internet.email());
      I.click('form[name=fos_user_registration] input[name=sign_up]');
      I.wait(1);    
      I.saveScreenshot(paths.screenPath1); 
      I.scrollTo('.b-footer'); 
      I.saveScreenshot(paths.screenPath2); 
  });
});

