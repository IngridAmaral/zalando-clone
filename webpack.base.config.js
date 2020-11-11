/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return merge([
    {
      entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
      },
      watch: true,
      target: 'web',
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: '/node_modules/',
          },
          {
            test: /\.js$/,
            use: ['source-map-loader'],
            enforce: 'pre',
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html'),
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
        }),
      ],
    },
  ]);
};