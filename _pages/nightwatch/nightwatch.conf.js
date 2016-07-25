nightwatch_config = {
  src_folders : [ "tests/" ],

  selenium : {
    "start_process" : false,
    "host" : "hub.browserstack.com",
    "port" : 80
  },

  test_settings: {
    default: {
      selenium_host  : "hub.browserstack.com",
      selenium_port  : 80,
      silent: true,
      desiredCapabilities: {
        build: "Testing",
        "browserstack.user": "gfxenet",
        "browserstack.key": "LfAvrNxEtcyu8ckeUtTl",
        "browserstack.debug": true,
        browser: "firefox",
        browser_version: "45",
        os: "OS X",
        os_version: "El Capitan"
      }
    }
  }
};

module.exports = nightwatch_config;
