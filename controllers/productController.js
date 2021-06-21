const Product = require("../models/productSchema");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
    console.log(error);
  }
};

exports.addProduct = async (req, res) => {
  try {
    console.log(req.body);
    const newProduct = new Product(req.body);
    const response = await newProduct.save();
    res.status(200).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
