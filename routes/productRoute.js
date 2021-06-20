const express = require("express");
const router = express.Router();
const multer = require("multer");

const productController = require("../controllers/productController");
const Categories = require('../models/cetagories');
const upload = multer({
  limits: {
    fieldSize: 100000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|JPG|PNG|webp|JPEG|jpeg)$/))
      return cb(new Error("This is not a correct format of the file"));
    cb(undefined, true);
  },
});
router
  .get("/", productController.getAllProducts)
  .post("/", upload.single("upload"), async (req, res) => {
    try {
      // console.log(req.body.name);
      // console.log(req.file);
      const saveTO = new Categories({
        product_name: req.body.name,
        product_price: req.body.price,
        inStock: req.body.inStock,
        product_description: req.body.description,
        product_image: {
          image: req.file.buffer.toString("base64"),
          contentType: req.file.mimetype,
        },
      });
      const responseTO = await saveTO.save();
      res.send("Product added");
      // await req.user.save();
    } catch (error) {
      console.log(error);
      res.status(404).send({
        status: "fail",
        error: error.message,
      });
    }
  });

module.exports = router;
