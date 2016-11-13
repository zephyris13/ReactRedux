var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackConfig = require('./webpack.config.dev');

module.exports = _.assign(webpackConfig, {
  debug: false,
  noInfo: true,
  devtool: 'cheap-source-map',
  entry: [
    path.resolve(__dirname, '../src/index')
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      screwIE8: true,
    }),
    new CopyWebpackPlugin([
        { from: 'src/index.html' }
    ])
  ]
});
