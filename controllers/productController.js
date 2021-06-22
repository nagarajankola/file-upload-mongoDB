const Product = require("../models/productSchema");
const APIfeatures = require("../utils/apiFeatures");

// Controller to get the products
exports.getAllProducts = async (req, res) => {
  try {
    // const products = await Products.find({});
    const features = new APIfeatures(Product.find(),req.query).filter().sort().limitFields().paginate();

    const products = await features.query;
    res.status(200).json({
      status: "success",
      result: products.length,
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

// Controller to add a new product
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

// const multer = require("multer");

// exports.upload = multer({
//   limits: {
//     fieldSize: 100000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|png|JPG|PNG|webp|JPEG|jpeg)$/))
//       return cb(new Error("This is not a correct format of the file"));
//     cb(undefined, true);
//   },
// });
