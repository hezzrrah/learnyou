var url = 'mongodb://localhost:27017/learnyoumongo';

var mongo = require('mongodb').MongoClient
    mongo.connect(url, function(err, db) {

    //   var limit = parseInt(process.argv[2])
    //   var collection = db.collection('parrots');
    //   collection.find({age:{'$gt':limit}},{      name: 1
    // , age: 1
    // , _id: 0})
    //   .toArray(function(err, res) {
    //     console.log(res);
    //     // return res;
    //     // JSON.stringify(res);
    //     db.close();
    // });
    
    // var firstname = process.argv[2];
    // var lastname = process.argv[3];
    // var doc = {
    //     'firstName':firstname,
    //     'lastName' :lastname
    //   };
    //   console.log(JSON.stringify(doc));
    //   // console.log(doc);
    // // console.log(process.argv[2],process.argv[3]);
    // var collection = db.collection('process.argv[2]);
    //   collection.remove({
    //   "_id":process.argv[3]
    // }, function(err, res){
    //     // console.log(JSON.stringify(doc));
    //     db.close();
    // });
    
    //     {
    //   "name": "Tshirt",
    //   "size": "S",
    //   "price": 10,
    //   "quantity": 12
    //   "meta": {
    //     "vendor": "hanes",
    //     "location": "US"
    //   }
    // }
    
    var pipes=[];
     pipes.push({'$match':{
      'size':process.argv[2]
    }})
    pipes.push({'$group':{
      '_id':'avg',
      'avg':{'$avg':'$price'}
    }})
      // var age = parseInt(process.argv[2])
      var collection = db.collection('prices');
      collection.aggregate(pipes).toArray(function(err, res) {
        
        console.log(res[0].avg.toFixed(2));
        // return res;
        // JSON.stringify(res);
        db.close();
    });
    
    
    })