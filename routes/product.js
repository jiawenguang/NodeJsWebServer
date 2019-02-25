var express = require('express');
var router = express.Router();
var _= require('lodash');
var products=[];
products.push({name:"ZTE U880",price:899.8});
products.push({name:"HuWei 荣耀8",price:1899.8});
products.push({name:"iPhone 7 Plus 128G",price:5899.8});
/* GET users listing. */
router.get('/', function(req, res, next) {
	  //将product视图与指定的对象渲染后输出到客户端
	  res.render('product', { title: '我的商城', pdts:products});
});
//router.get('/:id/:category', function(req, res, next) {//获取地址上的参数product/123/456,打印结果123,456
//	res.send(req.params.id+","+req.params.category);
//});
//router.get('/:id', function(req, res, next) {//获取地址上的参数product/123?name=456,打印结果name:456
//	res.send("name:"+req.query.name+','+"id:"+req.params.id);
//});

router.post('/add',function(request,res,next){
    var entity={name:request.body.name,price:request.body.price};
    products.push(entity);
      //将product视图与指定的对象渲染后输出到客户端
      res.render('product', { title: '我的商城', pdts:products,msg:"添加成功"});
});
router.get('/rest', function(req, res, next) {
	  res.json(products);
	});
module.exports = router;
