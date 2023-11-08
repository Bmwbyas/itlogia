const path = require( 'path' )
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		filename: path.resolve( __dirname, 'src/index.js' ),
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: '[name][contenthash].js',
		assetModuleFilename: "[name] [ext]",
		clean: true
	},
	performance: {
		hints: false,
		maxAssetSize: 512000,
		maxEntrypointSize: 512000
	},
	plugins: [ new HtmlWebpackPlugin({
		title: "Webpack App",
		filename: "index.html",
		template: "src/index.html"
	} ),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets'),
					to: path.resolve(__dirname, 'dist/assets')
				}
			]
		})],
	devServer: {
		port: 3000,
		compress: true,
		hot: true,
		static: {
			directory: path.join( __dirname, 'dist' )
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|svg|jpeg|jpg|gif)$/i,
				type: "asset/resource"
			}
		]
	},
}
