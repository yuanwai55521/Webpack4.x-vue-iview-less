const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.base');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(webpackBase(), {
  entry: ['webpack-hot-middleware/client'],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
  ]
});
