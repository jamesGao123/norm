var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:  {
        main:"./demo/index.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[chunkhash:8].js",
        chunkFilename:"[name].[chunkhash:8].js",
        publicPath:  ''
    },
    externals: {
        jquery: 'window.$'
    },
    resolve:{
        alias:{}
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style','css!less?modules!postcss')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style','css!sass?modules!postcss')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=asset/image/[hash:8].[name].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/demo/index.tmpl.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new CleanWebpackPlugin(['build'], {
            root: '', // An absolute path for the root  of webpack.config.js
            verbose: true,// Write logs to console.
            dry: false // Do not delete anything, good for testing.
        }),
        new webpack.optimize.DedupePlugin(),//ШЅжи
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[chunkhash:8].css"),
        new  webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "[name].[chunkhash:8].js"
        })
    ]

}