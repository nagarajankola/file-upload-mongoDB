const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true
};

const reqNumber = {
    type: Number,
    required: true
};

const categoriesSchema = new mongoose.Schema({
    product_name: reqString,
    product_price: reqNumber,
    inStock: {
        type: Boolean,
        default: true
    },
    product_description: reqString,
    product_image:{
        image:String,
        contentType: String
    }
},{
    collection:"imageUpload"
})

const Categories = mongoose.model("categories", categoriesSchema);

module.exports = Categories;