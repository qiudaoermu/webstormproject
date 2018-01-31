
const webpack = require('webpack');// 热加载需要的 webpack


const glob = require('glob');
const PruifyCSSPlugin = require('purifycss-webpack');
const  path = require('path');
var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {


    entry:{
        main:'./src/main.js',
        vendor:['jquery','bootstrap']

    },
    module: {
        rules: [
            //css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //js

            {
                //正则匹配后缀.js文件;
                test: /\.js$/,
                //需要排除的目录
                exclude: /(node_modules|bower_components)/,
                //加载babel-loader转译es6
                loaders: [
                    'babel-loader', // .babelrc 具体配置文件
                    'eslint-loader'// 必须在 .babelrc 的后面

                ]
            },
            //json
            {
                test: /\.json$/,
                use: 'json-loader'
            },

            //图片
            {
                test:/\.(png|svg|jpg|gif|ico|woff|eot|ttf|woff2)$/,
                exclude: /(public)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {

                            limit:8000000,   //小于50K的 都打包

                            name:'[hash:8].[name].[ext]',
                            // publicPath:"img/",  //替换CSS引用的图片路径 可以替换成爱拍云上的路径
                            // outputPath:"../img/"        //生成之后存放的路径
                        }
                    }
                ]
            }

        ]
    },
    plugins:[


        new ImageminPlugin({

            pngquant: {
                quality: '95-100'
            }
        }),

        new PruifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'public/*.html'))//src下所有的html
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'

        })
    ]

}