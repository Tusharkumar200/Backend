const mongoose = require('mongoose');

// Define the schema for the youtubes collection
const ProductSchema = new mongoose.Schema({
    name: String,
    branch: String
});

// Define the model for the youtubes collection
// const ProductModel = mongoose.model('youtubes', ProductSchema);
const ProductModel = mongoose.model('youtubes', ProductSchema);

// Update a document in the youtubes collection
async function updateProduct() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    let data = await ProductModel.updateOne({ name: "sachin" }, { $set:{ branch: "CSE" } });
    console.log(data);
}

// updateProduct();


//  Delete the data

const deleteInDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    let data = await ProductModel.deleteOne({ name: "sachin" });
    console.log(data);
}
// deleteInDB();

const findInDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    let data = await ProductModel.find();
    console.log(data);
}

findInDB();

