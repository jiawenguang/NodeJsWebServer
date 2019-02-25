var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('type', { title: '分类页面-node.js开发',keyword:'分类关键词',describe:'分类描述' });
});

module.exports = router;
