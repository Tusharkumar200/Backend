const express = require('express');
const con = require('./config')
const app = express();

app.get('/', (req, resp) => {
    con.query('SELECT * FROM mytable', (err, result) => {
        if (err) {
            resp.send("error")

        }else{
            resp.send(result)
        }

    })

});


// post request

app.post('/insert', (req, resp) => {
    const data = {name:'Tushar kumar',password:'123456',result:'pass'};
    con.query('INSERT INTO mytable SET ?',data,(err,result)=>{
        if (err) {
            resp.send(err)

        }else{
            resp.send(result)
        }
    })
});
app.listen(8080);



