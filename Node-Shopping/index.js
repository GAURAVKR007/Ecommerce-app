// const express = require('express');
import express from 'express'
import cors from 'cors'
const app = express();
const port = 3001;

app.use(cors())

import { data } from './data.js';

app.get('/', (req, res) => {
    res.send({code: "200",message : "Hello world!",data : data});
})

app.listen(port,(req,res)=>{
    console.log("Server listening on port"+port);
})