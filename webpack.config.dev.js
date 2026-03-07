const merge = require('webpack-merge').default;
const baseConfig = require('./webpack.config.base');

const devConfig = {
  mode: 'development',
  watch: true,
};

module.exports = merge(baseConfig, devConfig);
