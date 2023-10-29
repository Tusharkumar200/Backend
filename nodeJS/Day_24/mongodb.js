const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
// const databaseName = 'test'
const databaseName = 'e-com'
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(databaseName);
    // return db.collection('YouTube'); 
    return db.collection('product'); 
}
dbConnect();
module.exports = dbConnect; 