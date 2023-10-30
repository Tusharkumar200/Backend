const express = require('express');
require('./config');
const Product = require('./product');
const app = express();

app.use(express.json());

// the combine is postAPI_WithMongoose.js file from Day_28

// app.get('/list', async (req, resp) => {
//     let data = await Product.find();
//     resp.send(data);
// });

app.delete('/delete/:_id', async (req, resp) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    resp.send(data);
   
});

app.listen(10000);