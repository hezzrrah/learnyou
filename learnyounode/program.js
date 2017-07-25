// var fs = require('fs');

/* module */
// var mymodule = require('./mymodule.js');
// var path = process.argv[2];
// var ext = process.argv[3];
// var result = mymodule(path,ext,function(err,data){
//     if(err){
//         return err;
//     }
//     data.forEach(function(fn){
//         console.log(fn);
//     })
    
// });


/* filter ls */
// var foleder = fs.readdir(process.argv[2],function(err,path){
//     for(var i in path){
//         if(path[i].lastIndexOf(process.argv[3])>0){
//             console.log(path[i]);
//         }
//     }
// });

/* async file io*/
// var file = fs.readFile(process.argv[2],function(err,f){
//     var lines = f.toString().split('\n').length-1;
//     console.log(lines);
//     return lines;
// });


/* file io */
// var file = fs.readFileSync(process.argv[2]);
// var lines = file.toString().split('\n').length-1;
// console.log(lines);


/* process.argv[] */
// var sum=0;
// for(var i=2;i<process.argv.length;i++){
//     sum += Number((process.argv[i]));
// } 
// console.log(sum);