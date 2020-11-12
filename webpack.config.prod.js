/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge').default;
// Plugins
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require('./webpack.config.base');

const prodConfig = {
  mode: 'production',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new Visualizer({ filename: './statistics.html' }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
