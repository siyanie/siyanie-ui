const webpack = require('webpack')

module.exports = {
	entry: {
		defer: './src/defer.js',
		main: './src/main.js'
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
					'react',
					'es2015'
				]
			}
		},
		{
			test: /\.svg$/,
			loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
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
		new webpack.HotModuleReplacementPlugin()
	]
}
