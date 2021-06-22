const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: (true, "A product must have a name"),
      trim: true,
    },
    originalPrice: {
      type: Number,
      required: (true, "A product must have originalPrice"),
    },
    originalPrice: {
      type: Number,
      required: (true, "A product must have originalPrice"),
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      required: (true, "A product must have description"),
      trim: true,
    },
    size: {
      type: String,
      required: (true, "A product must have size"),
      trim: true,
    },
    color: {
      type: String,
      required: (true, "A product must have color"),
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    occasion: {
      type: String,
      required: (true, "A product must have occasion"),
      trim: true,
    },
    season: {
      type: String,
      required: (true, "A product must have season"),
      trim: true,
    },
    // product_image:{
    //     image:String,
    //     contentType: String
    // },
    category: {
      type: String,
      required: (true, "A product must have category"),
      trim: true,
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
