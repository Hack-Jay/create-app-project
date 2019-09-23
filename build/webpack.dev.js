const webpack = require('webpack')
const path = require('path')
const Merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = Merge.smart(baseConfig, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: '3083',
    historyApiFallback: true,
    compress: true,
    hot: true,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
      },
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})