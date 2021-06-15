const express = require("express");
const dotenv = require("dotenv");

dotenv.config({path:"./config.env"});

const app = express();

PORT=process.env.PORT;

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.render('index');
});

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});