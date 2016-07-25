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
        build: "Sample tests for Nightwatch",
        "browserstack.user": "gfxenet",
        "browserstack.key": "LfAvrNxEtcyu8ckeUtTl",
        "browserstack.debug": true,
        "browserstack.local": true
      }
    },
    chrome_48: {
      selenium_host  : "hub.browserstack.com",
      selenium_port  : 80,
      silent: true,
      desiredCapabilities: {
        build: "Sample tests for Nightwatch",
        "browserstack.user": "gfxenet",
        "browserstack.key": "LfAvrNxEtcyu8ckeUtTl",
        "browserstack.debug": true,

        browser: "chrome",
        browser_version: "48",
        os: "Windows",
        os_version: "10",
        "browserstack.local": true
      }
    },
    firefox_45: {
      selenium_host  : "hub.browserstack.com",
      selenium_port  : 80,
      silent: true,
      desiredCapabilities: {
        build: "Sample tests for Nightwatch",
        "browserstack.user": "gfxenet",
        "browserstack.key": "LfAvrNxEtcyu8ckeUtTl",
        "browserstack.debug": true,

        browser: "firefox",
        browser_version: "45",
        os: "OS X",
        os_version: "El Capitan",
        "browserstack.local": true
      }
    }
  }
};

module.exports = nightwatch_config;
