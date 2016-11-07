const webpack = require('webpack')

module.exports = {
	entry: {
		defer: './src/defer.js'
	},
	output: {
		path: './build',
		filename: '[name].js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: [
					'es2015'
				]
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
}
