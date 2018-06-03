const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  merge(common, {
    mode: 'development',
    target: 'electron-main',
    entry: {
      main: './src/main.js'
    }
  }),
  merge(common, {
    mode: 'development',
    target: 'electron-renderer',
    entry: {
      gui: './src/index.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'Annapie'
      })
    ]
  })
]
