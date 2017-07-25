var http = require("http");
var bl = require('bl');
// var url = process.argv[2];
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var urls = [url1,url2,url3];
var Q = require('q');
// console.log(urls);
var count = 0
var out = new Array(3);
for(var i in urls){
// urls.forEach(function(url){
    // console.log(url);
    http.get(urls[i],function(res){
        res.pipe(bl(function(err,data){
            if(err){
                return err;
            }
            // console.log(urls[i]);
            // console.log(data.toString());
            out[i]=data.toString();
        }))
    })
}
Q.all(out).then(function(str){
    console.log(str);
    // for(var i in str){
    //     console.log(str[i]);
    // }
})
/* http pipe */
// var bl = require('bl');
// http.get(url,function(res){
//     res.pipe(bl(function(err,data){
//         console.log(data.toString().length);
//         console.log(data.toString());
//     }))
// });

/* http prac*/
// http.get(url,function(res){
//     res.on('data',function(str){
//         console.log(str.toString());
//     });
// });