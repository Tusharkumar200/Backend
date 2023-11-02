const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect((err)=>{
    if(err){
    console.warn("error during connection ");
    }
})

module.exports = con;




// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     database: "mydb"
// });

// con.connect((err) => {
//     if (err) {
//         console.error('Error during connection: ', err.stack); // Provide more detailed error information
//         return;
//     }
//     console.log('Connected as id ' + con.threadId);
// });

// module.exports = con;