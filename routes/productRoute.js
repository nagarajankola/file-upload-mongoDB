const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// http://localhost:4000/api/v1/products
router
  .get("/", productController.getAllProducts)
  .get("/cartItems",productController.getCartItems)
  .post("/", productController.addProduct)

  module.exports = router;

    
  
  
  // .post("/", upload.single("upload"), async (req, res) => {
  //   try {
  //     // console.log(req.body.name);
  //     // console.log(req.file);
  //     const saveTO = new Product({
  //       product_name: req.body.name,
  //       product_price: req.body.price,
  //       inStock: req.body.inStock,
  //       product_description: req.body.description,
  //       // product_image: {
  //       //   image: req.file.buffer.toString("base64"),
  //       //   contentType: req.file.mimetype,
  //       // },
  //     });
  //     const responseTO = await saveTO.save();
  //     res.send("Product added");
  //     // await req.user.save();
  //   } catch (error) {
  //     console.log(error);
  //     res.status(404).send({
  //       status: "fail",
  //       error: error.message,
  //     });
  //   }
  // });

