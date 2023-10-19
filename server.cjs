

/* eslint-disable no-undef */
const express = require('express') 
const path = require('path') 
const cors = require('cors')
const morgan = require('morgan')
const PORT = 3200;
const app = express();

const Veggie = require('./models/veggie.cjs')
const Fruit = require('./models/fruit.cjs')

// allows us to use process.env ( get variables from .env file)
require('dotenv').config();


require('./config/db.cjs');

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'))


app.use(express.json()); // adds .body to the request

// "/"
// serve the html and js of our react app (dist folder)
// dont need any more since our database is importing the information from the db
// const fruits = [];

app.get('/fruits',async (req,res)=> {
   const responseFromDB = await Fruit.find();
    res.send(responseFromDB)
})

app.post("/fruits", async (req,res)=>{
    console.log(req.body);
    let fruit = req.body;
    console.log(fruit)
    const responseFromDB = await Fruit.create(fruit);
    console.log(responseFromDB);
    res.status(201).send("Route is good"); 
});

app.get('/veggies', async (req, res) => {
    let veggiesFromDB = await Veggie.find()
    res.send(veggiesFromDB)
})

app.post("/veggies", async (req,res) => {
    //make veggies model
    let dbResponse = await Veggie.create(req.body);
    // the created objet
    res.status(201).send(dbResponse)
}) 

app.get("/", (req, res) => {
    res.send("here is your valuable data")
    
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});