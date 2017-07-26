var PORT = process.argv[2];
var PATH = process.argv[3];
var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var fs = require('fs');
// var crypto = require("crypto")
// app.use(require('stylus').middleware(PATH||__dirname + '/public'));
// app.use(express.static(process.argv[3]));
app.use(bodyparser.urlencoded({extended: false}));

// app.use(express.static(PATH||path.join(__dirname,'public')));

// app.set('views',PATH||path.join(__dirname,'templates'));
// app.set('view engine', 'jade');

// app.get('/home', function(req, res) {
//     // res.end('Hello World!')
//     // res.render('index',{date:new Date().toDateString()});
//     res.end(PATH);
// });
// app.use('/form', function(req, res) {
//     res.end(req.body.str.split('').reverse().join(''));
// })

// app.put('/message/:id', function(req, res){
//   var id = req.params.id
//   var str = require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')
//   res.send(str)
// })

// app.get('/search',function(req,res){
//     res.send(req.query);
// })

// app.use('/',function(req,res){
//     fs.readFile(PATH,function(err,data){
//         if(err){
//             return err;
//         }
//         res.send(JSON.parse(data.toString()));
//     })
// })
app.listen(PORT)