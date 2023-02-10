const { merge } = require('webpack-merge');
const commonconfig = require('./webpack.common');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(commonconfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});