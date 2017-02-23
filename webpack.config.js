const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./src/main.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		publicPath: '/',
		filename: 'main.js',
	},
	module: {
		preLoaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: [
				'eslint'
			]
		}],
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: [
				'babel'
			]
		},
		{
			test: /\.json$/,
			loaders: [
				'json'
			]
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// })
	]
}
