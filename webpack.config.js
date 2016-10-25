const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const precss = require('precss')
const path = require('path')
const postcssImport = require('postcss-import')

plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new ExtractPlugin('bundle.css'),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'main',
		children: true,
		minChunks: 2
	}),
]

module.exports = {
	debug: true,
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./src/client.jsx'
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel']
		},{
			test: /\.scss$/,
			loaders: ["style", "css", "postcss", "sass"]
		},{
			test: /\.css$/,
			loaders: ["style", "css"],
		},{
			test: /\.(jpe?g|png|gif)$/i,
			loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
			]
		},{
			test: /\.json$/,
			loader: 'json-loader'
		}],
	},
	postcss: function() {
		return [
			postcssImport({
				addDependencyTo: webpack,
			}), autoprefixer, precss
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [
			path.resolve('./sass_modules/'),
			path.resolve('./src/utils/'),
			path.resolve('./src/public/'),
		]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		proxy: {
			"/api/*": {
				"target": {
				 "host": "music.163.com",
				 "protocol": 'http:',
				 "port": 80
				},
				ignorePath: false,
				changeOrigin: true,
				secure: false,
				headers: {
          "Referer": "http://music.163.com"
        }
			},
			"/weapi/*": {
				"target": {
				 "host": "music.163.com",
				 "protocol": 'http:',
				 "port": 80
				},
				ignorePath: false,
				changeOrigin: true,
				secure: false,
				headers: {
          "Referer": "http://music.163.com"
        }
			}
		}
	},
	// devServer: {
	// 	contentBase: './dist',
	// 	hot: true,
	// 	headers: {
	// 		"Access-Control-Allow-Origin": "*"
	// 	},
	// 	historyApiFallback: true
	// },
	plugins: plugins,
	devtool: 'source-map',
	node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
}
