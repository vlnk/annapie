const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|config)/,
      use: 'babel-loader'
    }, {
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /(node_modules|config|\.vue)/,
      loader: 'standard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: 'file-loader'
    }, {
      test: /\.(yml|yaml|md)$/,
      use: 'raw-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': path.resolve(__dirname, '../src'),
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'npm_package_name',
      'npm_package_version'
    ]),
    new DotenvPlugin({
      path: './.env',
      silent: false,
      systemvars: true
    }),
    new CleanWebpackPlugin(['../build']),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development'
    }),
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, '../build')
  },
  node: {
    __dirname: false
  }
}
