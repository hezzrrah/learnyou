var PORT = process.argv[2];
var fs = require('fs');
var http = require('http');
var url = require('url');

/* http API */

// var urlParse =  {
//   search: '?iso=2017-07-23T16:26:15.705Z',
//   query: { iso: '2017-07-23T16:26:15.705Z' },
//   pathname: '/api/parsetime',
//   path: '/api/parsetime?iso=2017-07-23T16:26:15.705Z',
//   href: '/api/parsetime?iso=2017-07-23T16:26:15.705Z' }
var server = http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var key = url.parse(req.url,true);
    if(key.pathname.indexOf('parsetime')>0){
        res.end(JSON.stringify({
        hour:(new Date(key.query.iso)).getHours(),
        minute:(new Date(key.query.iso)).getMinutes(),
        second:(new Date(key.query.iso)).getSeconds()
    }));
    }
    if(key.pathname.indexOf('unixtime')>0){
        res.end(JSON.stringify({
            unixtime:Number(new Date(key.query.iso))
        }));
    }
    res.end();
})

// var map = require('through2-map');
// var server = http.createServer(function(req,res){
//     if(req.method !== 'POST'){
//         return;
//     }
//      req.pipe(map(function (chunk) {
//       return chunk.toString().toUpperCase();
//      })).pipe(res)
// });

/* read File write http */
// var server = http.createServer(function(req,res){
//     var str = fs.createReadStream(process.argv[3]).pipe(res);
// });

/* socket write time*/
// var net = require("net");
// var server = net.createServer(function(socket){
//     socket.write((new Date()).toJSON().substr(0,16).replace('T',' ')+'\n');
//     socket.end();
// });
server.listen(PORT,function(){
    // console.log('connect ',PORT);
});