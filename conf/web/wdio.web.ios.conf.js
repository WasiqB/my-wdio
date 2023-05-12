const { config } = require("./wdio.web.visual.conf");

config.port = 4723;
config.services.shift(); // Remove chromedriver
config.services.shift(); // Remove Selenium Standalone
config.services.push("appium");
config.appium = {
  // For options see
  // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
  logPath: "./logs/appium",
  args: {
    // For arguments see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
  },
  command: "appium",
};
config.capabilities = [
  {
    browserName: "safari",
    platformName: "iOS",
    platformVersion: "16.4",
    deviceName: "iPhone 14",
  },
];

exports.config = config;
