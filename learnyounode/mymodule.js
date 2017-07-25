var fs = require('fs');
module.exports = function(path,ext,callback){
    fs.readdir(path,function(err,data){
        if(err){
            return callback(err);
        }
        data = data.filter(function(fn){
            return fn.lastIndexOf(ext)>0;
        })
        callback(null, data)
    })
}


// fs.readdir(process.argv[2],function(err,path){
//     for(var i in path){
//         if(path[i].lastIndexOf(process.argv[3])>0){
//             console.log(path[i]);
//         }
//     }
// });