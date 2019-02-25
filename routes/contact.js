var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('contact', { title: '联系页面-node.js开发',keyword:'联系关键词',describe:'联系描述' });
});

module.exports = router;
