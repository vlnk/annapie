const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: '../build',
    hot: true
  },
  entry: ['babel-polyfill', './src/app.js'],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/app.html',
      title: 'Annapie'
    })
  ]
})
