const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});


require("./db/conn");

const app = require('./app');

PORT=process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});