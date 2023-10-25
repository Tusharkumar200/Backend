const dbConnect = require('./mongodb');

const deleteData =async ()=>{
    const data = await dbConnect();
    const result  =await data.deleteOne({owner: "Thapa Technical"});
    console.log(result);
}

deleteData();