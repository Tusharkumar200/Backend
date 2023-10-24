const dbConnect = require('./mongodb');

const insert =async ()=>{
    const db = await dbConnect();
    const result = db.insert(
        {
            name:"Raj",
            age: 21,
            city:"Mumbai"
        })
}   
insert();