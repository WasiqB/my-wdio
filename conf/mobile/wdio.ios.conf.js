const { join } = require('path');
const { config } = require('../wdio.conf');

const host = '127.0.0.1';   // default appium host
const port = 4723;          // default appium port

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

config.specs = ['./test/mobile/*.spec.js'];
config.sync = true;
config.port = port;
config.services = ['appium', 'native-app-compare'];
config.appium = {
  logPath: './logs/appium',
  waitStartTime: 6000,
  waitforTimeout: waitforTimeout,
  args: {
    address: host,
    port: port,
    commandTimeout: commandTimeout,
    sessionOverride: true,
    debugLogSpacing: true
  },
  command : 'appium'
};
config.nativeAppCompare = {
  baselineFolder: join(process.cwd(), './snapshots/baselines'),
  screenshotPath: join(process.cwd(), 'snapshots/'),
  autoSaveBaseline: true,
  blockOutStatusBar: false,
  blockOutIphoneXBottomBar: true,
  blockOutNavigationBar: true,
  imageNameFormat: '{tag}-{platformName}-{deviceName}'
};
config.capabilities = [
  {
    maxInstances: 1,
    platformName: 'iOS',
    deviceName: 'iPhone 8 Plus',
    'appium:platformVersion': '13.3',
    'appium:deviceName': 'iPhone 8 Plus',
    'appium:automationName': 'XCUITest',
    'appium:app': join(process.cwd(), './apps/app-0.2.1.app.zip'),
    waitforTimeout: waitforTimeout,
    'appium:commandTimeout': commandTimeout,
    'appium:newCommandTimeout': commandTimeout
  }
];

exports.config = config;
