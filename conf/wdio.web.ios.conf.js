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
  },
  command : 'appium'
};
config.capabilities = [
  {
    browserName: 'Safari',
    automationName: 'XCUITest',
    platformName: 'iOS',
    platformVersion: '13.3',
    deviceName: 'iPhone 8 Plus',
    fullReset: false,
    noReset: true,
    usePrebuiltWDA: true,
    // 'safari:useSimulator': true,
    includeSafariInWebviews: true,
    waitforTimeout: 30 * 60000,
    safariInitialUrl: config.baseUrl,
    commandTimeout: 30 * 60000,
    newCommandTimeout: 30 * 60000,
  },
];

exports.config = config;
