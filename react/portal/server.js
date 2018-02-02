/**
 * Created by Administrator on 2017/4/6.
 */

//---------------------------------------------
//   创建app应用 加载express模板               //
//---------------------------------------------

var express = require("express");
var app = express();

var compression = require('compression')



//尽量在其他中间件前使用compression
app.use(compression());

//---------------------------------------------
//   配置应用模板                            //
//  第一个参数模板引擎,第二内容               //
//---------------------------------------------
var swig = require("swig");
app.engine("html", swig.renderFile);
/*配置视图文件路径*/
app.set("views", "./");
var fs = require('fs')
/*注册所使用的模板引擎*/
app.set('view engine', 'html');
var filepath = './public/index.html';
var router = express.Router();





//-----------------------------------
//   设置静态文件托管               //
//----------------------------------
console.log(__dirname)
app.use('/', express.static(__dirname + '/public'))


//-----------------------------------
//   防止缓存                      //
//----------------------------------
swig.setDefaults({cache: false})
app.disable('view cache');

console.log(router);
app.get('/', function(req, res, next) {



    res.render('public/index.html')


});




app.listen(8090);