const express = require('express');
const dbconnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();

// important line
app.use(express.json());

// get Method does't contain body 

// To read the data of the database
// app.get('/',async(req,resp)=>{
//     const data = await dbconnect();
//     const result = await data.find().toArray();

//     resp.send(result);
//  })

// // USING POSTMAN
// inserting Data into DataBase
// app.post('/',async(req,resp)=>{
//     let data = await dbconnect();
//     let result = await data.insertOne(req.body);
//     resp.send(result);
// })

// // update The data of the DataBase
// app.put('/:xyz',async(req,resp)=>{  // we can update the owner
//         let data = await dbconnect();
//         let result = await data.updateOne({owner:req.params.xyz},{$set:req.body});
        
//         resp.send({result:"update"});
// })

// To Delete the data from the DataBase
// http://localhost:5000/6538f2ee683d47cb17e4d4d2
//  import const mongodb = require('mongodb');

app.delete('/:id',async(req,resp)=>{
    console.log(req.params.id)
    const data = await dbconnect();
    let item_deleted = {_id: new mongodb.ObjectId(req.params.id)}
    let result = await data.deleteOne(item_deleted);
    resp.send(result);
})


app.listen(5000);
