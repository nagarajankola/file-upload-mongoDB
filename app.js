const express = require("express");
const dotenv = require("dotenv");

const app = express();


app.use(express.json());



app.use(require('./routes/route'));

app.get("/",(req,res)=>{
    res.send('Hola!');
});

module.exports = app;