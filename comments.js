//create web server
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var template = require('art-template');
// var comments = [
//     {
//         name: '张三',
//         message: '今天天气不错',
//         dateTime: '2015-10-16'
//     },
//     {
//         name: '张三2',
//         message: '今天天气不错',
//         dateTime: '2015-10-16'
//     },
//     {
//         name: '张三3',
//         message: '今天天气不错',
//         dateTime: '2015-10-16'
//     },
//     {
//         name: '张三4',
//         message: '今天天气不错',
//         dateTime: '2015-10-16'
//     },
//     {
//         name: '张三5',
//         message: '今天天气不错',
//         dateTime: '2015-10-16'
//     }
// ]
// http.createServer(function (req, res) {
//     //使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true表示直接将查询字符串转为一个对象（通过query属性来访问）
//     var parseObj = url.parse(req.url, true);
//     //单独获取不包含查询字符串的路径部分（该路径不包含？之后的内容）
//     var pathname = parseObj.pathname;
//     if (pathname === '/') {
//         fs.readFile('./views/index.html', function (err, data) {
//             if (err) {
//                 return res.end('404 Not Found');
//             }
//             var htmlStr = template.render(data.toString(), {
//                 comments: comments
//             });
//             res