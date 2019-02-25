var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: '网站首页-node.js开发',keyword:'网站首页关键词',describe:'网站首页描述'});
});

module.exports = router;
