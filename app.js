var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var appRouter = require('./routes/app');
var productRouter = require('./routes/product');
var contactRouter = require('./routes/contact');
var typeRouter = require('./routes/type');
var searchRouter = require('./routes/search');
var blogRouter = require('./routes/blog');
var cartRouter = require('./routes/cart');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//拦截所有的请求，修改头部
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    //res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method == "OPTIONS") {
        res.send("200");
    } else {
    		next();  
    }
});
app.use('/', indexRouter);
app.use('/app', appRouter);
app.use('/product', productRouter);//测试路由
app.use('/contact', contactRouter);
app.use('/search', searchRouter);
app.use('/blog', blogRouter);
app.use('/type', typeRouter);
app.use('/cart', cartRouter);//测试路由
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
