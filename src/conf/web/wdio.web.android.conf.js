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
    chromedriverExecutable: "./libs/chromedriver",
  },
  command: "appium",
};
config.capabilities = [
  {
    browserName: "chrome",
    platformName: "Android",
    platformVersion: "12",
    deviceName: "Pixel 6 Pro",
    automationName: "UiAutomator2",
    avd: "Pixel_6_Pro",
    waitforTimeout: 30000,
    newCommandTimeout: 30000,
    nativeWebScreenshot: true,
  },
];

exports.config = config;
