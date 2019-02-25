var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var blog = [];
	blog.push({id:'1',img:'',title:'我是标题一',date:'2019-02-22 10:10:10',content:"<p style='margin:0;'>请在输入框内贴入你需要转换的HTML代码</p><p>HTML转换工具，可以将HTML代码转换为HTML转义字符串</p><p>直接将你所要用程序输出的大串HTML代码贴到输入框中，即可一键生成</p><p>如果您觉得好用，别忘了推荐给朋友！</p>",comment:'0',tag:'好学,上进',author:'admin'});
	blog.push({id:'2',img:'',title:'我是标题二',date:'2019-02-22 10:10:10',content:"<p style='margin:0;'>请在输入框内贴入你需要转换的HTML代码</p><p>HTML转换工具，可以将HTML代码转换为HTML转义字符串</p><p>直接将你所要用程序输出的大串HTML代码贴到输入框中，即可一键生成</p><p>如果您觉得好用，别忘了推荐给朋友！</p>",comment:'0',tag:'好学,上进',author:'admin'});
	blog.push({id:'3',img:'',title:'我是标题三',date:'2019-02-22 10:10:10',content:"<p style='margin:0;'>请在输入框内贴入你需要转换的HTML代码</p><p>HTML转换工具，可以将HTML代码转换为HTML转义字符串</p><p>直接将你所要用程序输出的大串HTML代码贴到输入框中，即可一键生成</p><p>如果您觉得好用，别忘了推荐给朋友！</p>",comment:'0',tag:'好学,上进',author:'admin'});
	res.render('blog', { title: '博客页面-node.js开发',keyword:'博客关键词',describe:'博客描述',blog:blog });
}); 
router.get('/:id', function(req, res, next) {
	res.send("name:"+req.query.id);
}); 
module.exports = router;
 