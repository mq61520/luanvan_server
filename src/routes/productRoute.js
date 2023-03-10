const express = require("express");
const router = express.Router();
const uploadProductImage = require("../common/uploadProductImage");

const productController = require("../controller/productController");

router.get("/products", productController.get_all);
router.post("/product", productController.add_product);
router.post(
  "/product_images",
  uploadProductImage.array("product_images", 6),
  productController.add_images
);
router.post("/product_del", productController.del_product);

module.exports = router;
