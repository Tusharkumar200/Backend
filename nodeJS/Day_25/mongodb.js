const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const databaseName = 'test'
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(databaseName);
    return db.collection('YouTube'); 
}

module.exports = dbConnect; 