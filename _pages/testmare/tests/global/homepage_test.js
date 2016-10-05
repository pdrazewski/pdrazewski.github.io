const helpers = require('../../helpers.js');

Feature('Homepage tests');

/*

Homepage scenarios:

1. I opened website homepage
2. I closed the cookie information


*/


/* 1. I opened website homepage */

helpers.sizes.forEach(function(size){

    let paths = helpers.generateLinks("homepage", size);

    Scenario(size + ': I opened website homepage ', (I) => {
        I.amOnPage(helpers.url);
        I.resizeWindow(size, 1900)  
        I.wait(2); 
        I.saveScreenshot(paths.screenPath1); 
        I.scrollTo('.b-footer'); 
        I.saveScreenshot(paths.screenPath2);     
    });

});