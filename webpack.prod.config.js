/* eslint-disable @typescript-eslint/no-var-requires */
var merge = require('webpack-merge').default;

// Plugins
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

var baseConfig = require('./webpack.base.config');

const prodConfiguration = (env) => merge([
  {
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
  },
]);

module.exports = (env) => merge(baseConfig(env), prodConfiguration(env));
