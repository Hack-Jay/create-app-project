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
			template: path.join(__dirname, '../src/index.html')
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
		}
	}
}