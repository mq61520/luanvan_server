const express = require("express");
const router = express.Router();
const uploadProductImage = require("../common/uploadProductImage");

const productController = require("../controller/productController");

router.post("/product", productController.add_product);
router.post(
  "/product_images",
  uploadProductImage.array("product_images", 6),
  productController.add_images
);

module.exports = router;
