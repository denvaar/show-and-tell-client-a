const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack')


module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Decisely Show and Tell',
      template: './index.html'
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: {
          safari10: true,
        }
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new Dotenv({
      path: './.env.production',
      systemvars: true,
      silent: true
    })
  ]
})
