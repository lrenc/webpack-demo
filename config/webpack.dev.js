const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { rootPath } = require('./constants');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(rootPath, './dist'),
    hot: true,
  }
});