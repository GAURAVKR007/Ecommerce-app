const express = require('express');
// import express from 'express'
// import cors from 'cors'
const cors = require('cors');
const db = require('./models')
// import db from './models'
const {Books, Coffees,Tags, MousePads} = require('./models')
const bodyParser = require('body-parser')
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const {data} = require('./data.js')

app.get('/', async(req, res) => {
  console.log("Called root");
})

app.get('/books', async(req, res) => {
    // res.send({code: "200",message : "Hello world!",data : data});
    const list = await Books.findAll();
    res.json(list)
    // res.send(list)
})

app.get('/coffee',async(req, res) => {
  const list = await Coffees.findAll();
  res.json(list)
})

app.get('/mousepads',async(req, res) => {
  const list = await MousePads.findAll();
  res.json(list)
})

app.get('/luggagetags',async(req, res) => {
  const list = await Tags.findAll();
  res.json(list)
})

app.post("/posts", async(req, res) => {
    const post = req.body;
    await Tags.create(post);
    res.json(post)
      
})

app.get("/:title", async(req, res) => {
    try {
        const title = req.params.title;
        
        // Search for data in the database based on the 'title' parameter
        const searchData = await Books.findAll({
          where: {
            title: title,
          },
        });

        console.log(title);
        console.log(searchData);
    
        if (searchData.length === 0) {
          return res.status(404).json({ message: 'Data not found' });
        }
    
        res.json(searchData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }

})

db.sequelize.sync().then(() => {
    app.listen(port,(req,res)=>{
        console.log("Server listening on port"+port);
    })
})

