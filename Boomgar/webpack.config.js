var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');


module.exports = {

    entry: ['./App/Bomgar.js', 'font-awesome-loader'],

    output: {
        filename: 'main.js',
        path: './Public'
    },

    sassLoader: {
        //includePaths: [
        //    './node_modules/bootstrap-sass',
        //    './node_modules/bootstrap-material-design/sass']
        includePaths: ['./Style']
    },
    devtool: '#cheap-module-eval-source-map',
    watch: true,

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
            },
            {
                test: /\.less$/,
                loader: "style!css!less?strictMath&noIeCompat"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: "file"
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            }
		]
    },

    plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
		new webpack.optimize.UglifyJsPlugin({
            minimize: false
        }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Alfa Vision Licensing Administration',
            template: './Markup/index.html',
            hash: false,
            inject: true
        })
	],

    postcss: [
		autoprefixer({
            browsers: ['last 2 versions']
        })
	],

    devServer: {
        contentBase: './Public',
        historyApiFallback: true,
        host: 'localhost',
        hot: true,
        port: 8080,
        stats: {
            color: true
        },
        watchOptions: {
            aggregateTimeout: 50
        }
    }


}
