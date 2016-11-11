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
			loader: 'babel',
			query: {
				presets: [
					'es2015'
				]
			}
		},
		{
			test: /\.yml$/,
			loaders: [
				'json',
				'yaml'
			]
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
}
