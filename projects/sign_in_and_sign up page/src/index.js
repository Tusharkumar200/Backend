const express = require("express")
const app = express()
const path = require('path')
const hbs = require('hbs')
const collection = require('./mongodb')
const { homedir } = require("os")

const tempelatePath = path.join(__dirname,'../tempelates')

app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', tempelatePath);
app.use(express.urlencoded({extended:false}))


app.get('/', (req,res)=>{
    res.render('signup')
   
})

app.get('/signup', (req,res)=>{
    res.render('signup')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/signup', async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).send('Name and password are required');
    }

    const data = new collection({
        name: name,
        password: password
    });

    try {
        await data.save();
        res.status(201).render('home');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/login',async(req,res)=>{
    
   try{
    const check=await collection.findOne({name:req.body.name})

    if(check.password===req.body.password){
        res.render('home')
   }
   else{
       res.send('invalid password')
   }
}
catch(err){
    res.send('invalid username')}
});


app.listen(3000,()=>{
    console.log('port connected');
})