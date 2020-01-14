const { join } = require('path');
const { config } = require('./wdio.conf');

config.specs = ['./test/web/mobile/*.spec.js'];
config.port = 4723;
config.services = [
  'appium',
  [
    'image-comparison',
    {
      baselineFolder: join(process.cwd(), './snapshots/baselines'),
      returnAllCompareData: true,
      // debug: true,
      formatImageName: '{tag}-{logName}-{width}x{height}',
      screenshotPath: join(process.cwd(), 'snapshots/'),
      savePerInstance: false,
      blockOutStatusBar: true,
      autoSaveBaseline: true,
      blockOutToolBar: true,
      clearRuntimeFolder: true,
    },
  ]
];
config.appium = {
  // For options see
  // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
  logPath: './logs/appium',
  args: {
    // For arguments see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    chromedriverExecutable: './libs/chromedriver',
  },
  command : 'appium'
};
config.capabilities = [
  {
    appiumVersion: '1.16.0',
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '8.1',
    deviceName: 'emulator-5554',
    waitforTimeout: 30 * 60000,
    commandTimeout: 30 * 60000,
    newCommandTimeout: 30 * 60000,
    nativeWebScreenshot: true,
    // The defaults you need to have in your config
    // platformName: 'Android',
    // browserName: 'Chrome',
    // maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    // 'appium:deviceName': 'Pixel_8.1',
    // 'appium:platformName': 'Android',
    // 'appium:browserName': 'Chrome',
    // 'appium:platformVersion': '8.1',
    // 'appium:orientation': 'PORTRAIT',
    // `automationName` will be mandatory, see
    // https://github.com/appium/appium/releases/tag/v1.13.0
    // 'appium:automationName': 'UiAutomator2',
    // 'appium:newCommandTimeout': 240,
    // 'goog:chromeOptions': {
    //   w3c: true,
    //   // Add this option to prevent the annoying "Welcome"-message
    //   args: [ '--no-first-run' ],
    // },
  },
];

exports.config = config;
