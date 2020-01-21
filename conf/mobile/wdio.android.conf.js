const { join } = require('path');
const { config } = require('../wdio.conf');

const host = '127.0.0.1';   // default appium host
const port = 4723;          // default appium port

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

config.specs = [
  './test/mobile/*.spec.js'
];

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
  blockOutStatusBar: true,
  blockOutIphoneXBottomBar: true,
  blockOutNavigationBar: true,
  imageNameFormat: '{tag}-{platformName}-{deviceName}',
  clearRuntimeFolder: true,
};
config.capabilities = [
  {
    maxInstances: 1,
    platformName: 'Android',
    'appium:platformVersion': '8.1',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), './apps/app-0.2.1.apk'),
    waitforTimeout: waitforTimeout,
    'appium:commandTimeout': commandTimeout,
    'appium:newCommandTimeout': commandTimeout
  }
];

exports.config = config;
