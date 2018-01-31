
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common,{
    output: { //打包路径
        //filename: '[name].bundle.js', //出口文件名
        // filename: '[name].[chunkhash].js',
        // 可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径
        path: path.resolve(__dirname, './public/dist'), //打包路径
        publicPath:'dist/', // 指定publicPath
        filename: '[name].' + 'bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'source-map',
    devServer:{
        contentBase: [path.join(__dirname, "./src")],
        host: '127.0.0.1',
        port: 6600,
        hot: true // 服务器热加载
    }
    ,
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin()
    ]




})
console.log(module.exports.output)