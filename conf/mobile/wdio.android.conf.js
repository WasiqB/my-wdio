import mainConfig from "../wdio.conf.js";

const host = "127.0.0.1"; // default appium host
const port = 4723; // default appium port

const waitforTimeout = 30000;
const commandTimeout = 30000;

console.log(mainConfig.config);
export const config = {
  ...mainConfig.config,
  specs: ["../../test/mobile/*.spec.js"],
  port,
  services: [
    [
      "appium",
      {
        logPath: "./logs/appium",
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        args: {
          address: host,
          port: port,
          commandTimeout: commandTimeout,
          sessionOverride: true,
          debugLogSpacing: true,
        },
        command: "appium",
      },
    ],
    "native-app-compare",
  ],
  nativeAppCompare: {
    baselineFolder: join(process.cwd(), "./snapshots/baselines"),
    screenshotPath: join(process.cwd(), "snapshots/"),
    autoSaveBaseline: true,
    blockOutStatusBar: true,
    blockOutIphoneXBottomBar: true,
    blockOutNavigationBar: true,
    imageNameFormat: "{tag}-{platformName}-{deviceName}",
  },
  capabilities: [
    {
      maxInstances: 1,
      platformName: "Android",
      deviceName: "Pixel 6 Pro",
      "appium:platformVersion": "12",
      "appium:deviceName": "Pixel 6 Pro",
      "appium:automationName": "UiAutomator2",
      "appium:avd": "Pixel_6_Pro",
      "appium:app": join(process.cwd(), "/apps/app-0.2.1.apk"),
      waitforTimeout: waitforTimeout,
      "appium:commandTimeout": commandTimeout,
      "appium:newCommandTimeout": commandTimeout,
    },
  ],
};
