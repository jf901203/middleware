// express框架等于在http模块之上 加了一个中间层
var express=require('express');
// 用express()创建实例
var app=express();
// 回调函数接收req请求对象和res响应对象
// 中间层function (req,res,next)
app.get('/',function (req,res,next) {
    res.send('Hello world')；
    next();
  })
 
  
app.listen(4000)