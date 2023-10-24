// const { response } = require('express');
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const databaseName = 'test'
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection('YouTube');  
    let data =await collection.find({}).toArray();
    console.log(data);
}

getData();