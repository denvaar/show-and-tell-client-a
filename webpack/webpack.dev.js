const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HTMLPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
      systemvars: true,
      silent: true
    })
  ]
})
