const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({path:"./config.env"});
PORT=process.env.PORT;
app.use(express.json());

require("./db/conn");

app.use(require('./routes/route'));


app.get("/",(req,res)=>{
    res.send('Hola!');
});

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});