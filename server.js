const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});

require("./db/connection");

const app = require('./app');

PORT=process.env.PORT;

// port 
app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});