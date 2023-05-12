const { join } = require("path");
const { config } = require("../wdio.conf");

config.specs = ["../../test/web/visual/*.spec.js"];

// https://github.com/wswebcreation/webdriver-image-comparison/blob/master/docs/OPTIONS.md#compare-options
config.services.push([
  "image-comparison",
  {
    baselineFolder: join(process.cwd(), "./snapshots/baselines"),
    returnAllCompareData: true,
    formatImageName: "{tag}-{logName}-{width}x{height}",
    screenshotPath: join(process.cwd(), "snapshots/"),
    savePerInstance: false,
    blockOutStatusBar: true,
    autoSaveBaseline: true,
    blockOutToolBar: true,
    clearRuntimeFolder: true,
  },
]);

exports.config = config;
