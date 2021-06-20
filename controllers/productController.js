const Products = require("../models/cetagories");


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


