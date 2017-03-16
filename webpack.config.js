const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: path.resolve(__dirname, 'src/js/')
	},
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.(scss|sass)$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']	
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: ('src/index.html')
		}),
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.UglifyJsPlugin({})
	]
}