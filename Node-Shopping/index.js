const express = require('express');
// import express from 'express'
// import cors from 'cors'
const cors = require('cors');
const db = require('./models')
// import db from './models'
const {Books} = require('./models')
const bodyParser = require('body-parser')
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const {data} = require('./data.js')

app.get('/', async(req, res) => {
    // res.send({code: "200",message : "Hello world!",data : data});
    const list = await Books.findAll();
    res.json(list)
})

app.post("/posts", async(req, res) => {
    const post = req.body;
    await Books.create(post);
    res.json(post)
      
})

db.sequelize.sync().then(() => {
    app.listen(port,(req,res)=>{
        console.log("Server listening on port"+port);
    })
})

