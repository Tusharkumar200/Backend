const mongoose = require('mongoose')

const main = async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    const ProductSchema = new mongoose.Schema({
        owner: String,
        regNo: Number
    });
    const ProductModel = mongoose.model('YouTube',ProductSchema);
    let data = new ProductModel({owner: "sachin",regNo:604})
    let result= await data.save();
    console.log(result);
}
main();