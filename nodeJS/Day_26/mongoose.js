const mongoose = require('mongoose')

const main = async ()=>{
    // await mongoose.connect('mongodb://127.0.0.1:27017/test'); 
    await mongoose.connect('mongodb://127.0.0.1:27017/student'); 
    const ProductSchema = new mongoose.Schema({
    
        name: String,
        branch: String,
        
    });
    const ProductModel = mongoose.model('student',ProductSchema);
    let myData = {Name:"Tushar kumar",Branch:"CSE"}
    let data = new ProductModel({myData})
    let result= await data.save();
    console.log(result);
}
main();