
var express=require('express')
var app=express()
var http=require('http')
// use是express注册中间件的方法
// use方法内部可以对访问路径进行判断，据此就能实现简单的路由，根据不同的请求网址，返回不同的网页内容。
app.use(function(req, res, next) { //处理http请求的函数成为中间件
    // 只要请求路径匹配，就不会将执行权交给下一个中间件
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to the homepage!\n");
    } else {
      next();
    }
  });
  
  app.use(function(req, res, next) {
    // 在回调函数中判断请求地址
    if (req.url == "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("welcome")
    } else {
      next();
    }
  });
  

//   除了在回调函数内部判断请求的网址，use方法也允许将请求网址写在第一个参数。这代表，只有请求路径匹配这个参数，后面的中间件才会生效。无疑，这样写更加清晰和方便。
// 上面代码表示，只对根目录的请求，调用某个中间件
// 中间件就是处理HTTP请求的函数
app.use('/path', function (req,res,next) { //调用中间间

  res.writeHead(200,{ "Content-Type": "text/plain" })

  res.end('hello path')
  });
app.use('/home',function (req,res,next) {
    res.writeHead(200,{ "Content-Type": "text/plain" })
    res.end('hello home')
  })
app.use('/mise',function (req,res,next) {
    res.writeHead(200,{ "Content-Type": "text/plain" })
    res.end('hello mise')
  })  


  app.use(function(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error!\n");
  });
http.createServer(app).listen(3000)

