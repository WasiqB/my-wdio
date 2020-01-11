const { config } = require('./wdio.conf');

config.specs = [
  './test/specs/**/*.js'
];

exports.config = config;
