var mongo_db = require('mongodb')
var client = mongo_db.MongoClient;
const DATABASE_NAME = 'Atharv'
var database_url= 'mongodb://0.0.0.0:27017/" + DATABASE_NAME'
let db;
client.connect(database_url,function(error,database)
{
    if (error!=null) {
        console.log(error);
    }
    else{
        console.log('connection created');
        db = database.db()
    }

})