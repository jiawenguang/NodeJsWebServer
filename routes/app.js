var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('app', { title: '应用页面-node.js开发',keyword:'应用关键词',describe:'应用描述' });
});

module.exports = router;
