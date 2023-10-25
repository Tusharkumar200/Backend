const express = require('express');
const dbconnect = require('./mongodb');
const app = express();

app.use(express.json());

app.get('/',async(req,resp)=>{
    const data = await dbconnect();
    const result = await data.find().toArray();

    resp.send(result);
})
// USING POSTMAN
app.post('/',async(req,resp)=>{
    console.log(req.body);
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    resp.send(result);
})

app.listen(5000);
