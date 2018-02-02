#前端脚手架 portal


## 目录结构说明
|--public #发布文件
|--src #当前项目的源码
    |--assets #静态资源
    |--lib #需要用到的库
    |--utils #工具函数
    |--main.js 入口文件

npm start #开发环境打包
npm run build #线上环境






使用到的webpack插件


 -~uglifyjs-webpack-plugin
|
 -文件压缩

 -html-webpack-plugin
|
 -html文件生成,主要是在js hash值改变时动态改变

 -copy-webpack-plugin
|
 -文件拷贝,在打包时将css下的文件拷贝到生产目录

 -webpack-bundle-analyzer
|
 -查看文件打包的文件内容
 -webpack-remove-hashed-files
|
 -清除hash值文件 vendor文件排除外