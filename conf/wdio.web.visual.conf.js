const { join } = require('path');
const { config } = require('./wdio.conf');

config.specs = [
  './test/web/visual/*.spec.js'
];

config.services = [
  [
    'image-comparison',
    {
      baselineFolder: join(process.cwd(), './localBaseline/'),
      debug: true,
      formatImageName: '{tag}-{logName}-{width}x{height}',
      screenshotPath: join(process.cwd(), '.tmp/'),
      savePerInstance: true,
      blockOutStatusBar: true,
      autoSaveBaseline: true,
      blockOutToolBar: true,
      clearRuntimeFolder: true,
    },
  ],
];

exports.config = config;
