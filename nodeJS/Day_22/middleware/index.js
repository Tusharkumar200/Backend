const express = require('express');
const app = express();
const appFilter = require('./myMiddleWare');  // we can make middleWare in separate file also

const route = express.Router();
route.use(appFilter);

app.get('/home', (req,resp)=>{
    resp.send("Welcome to Home Page")
})

// app.use(appFilter); --> to use router-level middleware remove it and add it{:⬇️} inside get method

app.get('/about',appFilter ,(req,resp)=>{
    resp.send("Welcome to about Page")
})
app.get('/contactUS', (req,resp)=>{
    resp.send("Welcome to contactUS Page")
})
app.get('/login', appFilter,(req,resp)=>{
    resp.send("Welcome to login Page")
})

// To apply middleware in groups (use route method)

route.get('/play' ,(req,resp)=>{
    resp.send("Welcome to play Page")
})
route.get('/store', (req,resp)=>{
    resp.send("Welcome to store Page")
})

app.use('/',route);

app.listen(8080);