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
  }
})