var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');
var webpackConfig = require('./webpack.config.dev');

module.exports = _.assign(webpackConfig, {
  debug: false,
  noInfo: true,
  devtool: "cheap-source-map",
  entry: [
    path.resolve(__dirname, '../src/index')
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
    }),
  ]
});
