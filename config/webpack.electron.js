const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  merge(common, {
    mode: 'development',
    target: 'electron-main',
    entry: {
      main: './src/window.js'
    }
  }),
  merge(common, {
    mode: 'development',
    target: 'electron-renderer',
    entry: {
      gui: './src/app.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/app.html',
        title: 'Annapie'
      })
    ]
  })
]
