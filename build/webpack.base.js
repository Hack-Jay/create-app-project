const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '../src/index.js'),
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name][hash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [path.resolve(__dirname, '../node_modules')],
				loader: 'babel-loader?cacheDirectory'	
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
		        test: /\.(png|svg|jpg|gif)$/,
		        use: [
						{
							loader: 'file-loader',
							options: {}
						},
						{
							loader: 'image-webpack-loader',
							options: {
								mozjpeg: { // 压缩 jpeg 的配置
									progressive: true,
									quality: 65
								},
								optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
									enabled: false,
								},
								pngquant: { // 使用 imagemin-pngquant 压缩 png
									quality: '65-90',
									speed: 4
								},
								gifsicle: { // 压缩 gif 的配置
									interlaced: false,
								},
								webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
									quality: 75
								},
							},
						}
		      ]
		    },
		]
	},
	resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, '../src/index.html'),
			title: "awesome",
      favicon: path.join(__dirname, '../src/favicon.ico')
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {	
				vendors: {
				  chunks: "initial",
				  test: path.resolve(__dirname, "../node_modules"),
				  name: "vendor", 
				  enforce: true,
				},
				default: {
				  minChunks: 2,
				  priority: -20,
				  reuseExistingChunk: true
				}
			  }
		},
		// splitChunks: {
    //   chunks: 'all',
    //   minSize: 10000, // 提高缓存利用率，这需要在http2/spdy
    //   maxSize: 0,//没有限制
    //   minChunks: 3,// 共享最少的chunk数，使用次数超过这个值才会被提取
    //   maxAsyncRequests: 5,//最多的异步chunk数
    //   maxInitialRequests: 5,// 最多的同步chunks数
    //   automaticNameDelimiter: '~',// 多页面共用chunk命名分隔符
    //   name: true,
    //   cacheGroups: {// 声明的公共chunk
    //     vendor: {
    //      // 过滤需要打入的模块
    //       test: module => {
    //         if (module.resource) {
    //           const include = [/[\\/]node_modules[\\/]/].every(reg => {
    //             return reg.test(module.resource);
    //           });
    //           const exclude = [/[\\/]node_modules[\\/](react|redux|antd)/].some(reg => {
    //             return reg.test(module.resource);
    //           });
    //           return include && !exclude;
    //         }
    //         return false;
    //       },
    //       name: 'vendor',
    //       priority: 50,// 确定模块打入的优先级
    //       reuseExistingChunk: true,// 使用复用已经存在的模块
    //     },
    //     react: {
    //       test({ resource }) {
    //         return /[\\/]node_modules[\\/](react|redux)/.test(resource);
    //       },
    //       name: 'react',
    //       priority: 20,
    //       reuseExistingChunk: true,
    //     },
    //     antd: {
    //       test: /[\\/]node_modules[\\/]antd/,
    //       name: 'antd',
    //       priority: 15,
    //       reuseExistingChunk: true,
    //     },
    //   },
    // },
	}
}