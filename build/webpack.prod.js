const Merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require('./webpack.base')

const config = Merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          'less-loader'
        ],
      },
    ]
  }
})
config.plugins.push(new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
}))

module.exports = config