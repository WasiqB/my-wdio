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
    browserName: 'safari',
    platformName: 'iOS',
    platformVersion: '13.3',
    deviceName: 'iPhone 8 Plus',
  },
];

exports.config = config;
