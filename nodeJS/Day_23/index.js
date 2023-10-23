// const { response } = require('express');
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);
const database = 'test';

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('YouTube');
    let resp =await collection.find({});
    console.log(resp);
}

getData();