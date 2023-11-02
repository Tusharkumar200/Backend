const express = require('express');
const con = require('./config');
const app = express();

app.get('/', (req, resp) => {
    con.query('SELECT * FROM mytable', (err, result) => {
        if (err) {
            resp.send("error")
        } else {
            resp.send(result)
        }
    })
});

app.post('/', (req, resp) => {
    const data = { name: 'Tushar kumar', password: '123456', result: 'pass' };
    con.query('INSERT INTO mytable SET ?', data, (err, result) => {
        if (err) {
            resp.send(err)
        } else {
            resp.send(result)
        }
    });


})


// put request
app.put('/', (req, resp) => {
    const data = ['Tushar kumar', '123456', 'pass', 1, 1];
    con.query('UPDATE mytable SET name=?, password=?, result=? WHERE id=?', data, (err, result) => {
        if (err) throw error;
        resp.send(result);
    });
})


// delete request

app.delete('/:id', (req, resp) => {
    con.query('DELETE FROM mytable WHERE id=?', [req.params.id], (err, result) => {
        if (err) throw err;
        resp.send(result);
    });

})

app.listen(9999);