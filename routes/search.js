var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('search', { title: '搜索页面-node.js开发',keyword:'搜索关键词',describe:'搜索描述' });
});

module.exports = router;
