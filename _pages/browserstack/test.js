var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
 'browserstack.user' : 'gfxenet',
 'browserstack.key' : 'LfAvrNxEtcyu8ckeUtTl',
 'browserName' : 'Chrome',
 'os' : 'Windows',
 'os_version' : '10',
 'resolution' : '1920x1200',
 'build' : 'Login testing',
 'acceptSslCerts' : 'true', 
 'name': 'test1',
 'browserstack.debug' : 'true',
 'project' : 'sizeer'
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();


driver.get('http://www.sizeer.cz/profile');
driver.findElement(webdriver.By.name('enp_customer_form_login[username]')).sendKeys('piotr.szmal@enp.pl');
driver.findElement(webdriver.By.name('enp_customer_form_login[password]')).sendKeys('Testowe1');
driver.findElement(webdriver.By.name('enp_customer_form_login')).submit();



driver.quit();