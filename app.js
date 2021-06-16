const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const Categories = require("./models/cetagories");

dotenv.config({path:"./config.env"});
PORT=process.env.PORT;
DB=process.env.MONGO_URI;

const app = express();

require("./db/conn");

const upload = multer({
  limits:{
    fieldSize:100000000,
  },
  fileFilter(req,file,cb){
    if(!file.originalname.match(/\.(jpg|png|JPG|PNG|webp|JPEG|jpeg)$/))
        return cb(new Error('This is not a correct format of the file'))
        cb(undefined,true)
  }
})

app.post('/upload',upload.single('upload') ,async(req,res)=>{
  console.log(req.body.name);
  console.log(req.file);
  const saveTO = new Categories({
    product_name: req.body.name,
    product_price: req.body.price,
    inStock: req.body.inStock,
    product_description: req.body.description,
    product_image:{
     image: req.file.buffer,
     contentType: req.file.mimetype
    }  
  })
  const responseTO = saveTO.save();
  res.send("Product added");
  // await req.user.save();
},(err,req,res,next)=>{
  res.status(404).send({error:err.message});
})

app.get('/allItems',async (req,res)=>{
  try {
    const allItems = await Categories.find({});

    res.status(201).json({allItems});
  } catch (error) {
    res.status(400).json({error});
    console.log(error);
  }
})

app.get("/",(req,res)=>{
    res.send('index');
});

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});