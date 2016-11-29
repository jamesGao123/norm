var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool:"cheap-eval-source-map",
    entry:  [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/dev-server', // only-dev-server
        "./demo1/index.js"
    ],
    output: {
        path: __dirname + "/build",
        filename: "[name].js",
        chunkFilename:"[name].js",
        publicPath:  ''
    },
    externals: {
        jquery: 'window.$'
    },
    resolve:{
        alias:{
        }
    },
    module:{
        loaders: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json"
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory:true,
                    dev:true,
                    babelrc: false,
                    presets: [['es2016', { modules: false }], 'react', 'stage-0'],
                    plugins: ['transform-runtime', 'react-hot-loader/babel']
                },
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
            template: __dirname + "/demo1/index.tmpl.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("dev")
            }
        }),
        new ExtractTextPlugin("[name]-[chunkhash:8].css"),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true
    }
};