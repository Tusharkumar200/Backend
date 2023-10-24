// connect to the database 
const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'test'
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection('YouTube');  
    let data =await collection.find({}).toArray();
    console.log(data);
}

dbConnect();