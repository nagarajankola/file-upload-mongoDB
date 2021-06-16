const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const conn = mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(()=>{
    console.log("connection succcessfull");
})
.catch((err) => console.log("no connection"));

module.exports = conn;