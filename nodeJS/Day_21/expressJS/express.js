const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('your are in home page')
});
app.get('/about', (req, res) => {
    res.send('you are in about page')
});
app.get('/contact', (req, res) => {
    res.send('you are in contact page')
});

app.listen(3000);