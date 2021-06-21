const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    originalPrice: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    occasion: {
      type: String,
      required: true,
      trim: true,
    },
    season: {
      type: String,
      required: true,
      trim: true,
    },
    // product_image:{
    //     image:String,
    //     contentType: String
    // }
  },
  {
    collection: "products",
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
