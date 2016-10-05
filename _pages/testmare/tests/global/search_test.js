const helpers = require('../../helpers.js');

Feature('Search tests');
/*

Search scenarios:
1. I have searched for random product and I was redirect for "no results found" page

*/

/* 1. I have searched for random product and I was redirect for "no results found" page */
helpers.sizes.forEach(function(size){
    let paths = helpers.generateLinks("search", size);
    let random = helpers.faker.internet.password();
  
    Scenario(size + ': I have searched for random product and I was redirect for "no results found" page ', function*(I) {
        I.amOnPage(helpers.url);
        I.resizeWindow(size, 1900)  
        let hint = yield I.executeScript(function(){
            return document.querySelectorAll('.b-header form[action] #query_querystring').length
        });
        if (hint) {
            I.fillField('.b-header form[action] #query_querystring', random);
            I.executeScript(function(){
                document.querySelectorAll('.b-header form[action]')[0].submit();
            });
            I.wait(1); 
            I.saveScreenshot(paths.screenPath1); 
            I.scrollTo('.b-footer'); 
            I.saveScreenshot(paths.screenPath2); 
            I.dontSeeElementInDOM(".js-filter-block");
        } else {
            I.dontSeeElementInDOM('.b-header form[action] #query_querystring');  
            I.saveScreenshot(paths.screenPath1);
        }
    });
});
