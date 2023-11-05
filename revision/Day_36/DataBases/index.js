// connect with the database

const {MongoClient} = require('mongodb');
const url = 'mongo://127.0.0.1:270173';

const databaseName = 'test';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection('facebook');
    let data = await collection.find({}).toArray();
    console.log(data);
}
dbConnect();