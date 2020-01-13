const { config } = require('./wdio.conf');

config.specs = [
  './test/web/*.spec.js'
];

exports.config = config;
