const express = require("express");
const router = express.Router();

const uploadProductImage = require("../common/uploadProductImage");
const productController = require("../controller/productController");

router.get("/products", productController.get_all);
router.get("/product_id/:id", productController.get_product_id);
router.get("/product_images/:id", productController.get_images_id);
router.get("/product_check/:ma_sp", productController.check_code);
router.get("/product/category/:type", productController.get_product_category);
router.post("/product", productController.add_product);
router.post(
  "/product_images",
  uploadProductImage.array("product_images", 12),
  productController.add_images
);
router.post("/product_del", productController.del_product);
router.post("/product_update_amount", productController.update_product_amount);
router.post(
  "/product/update_promotion",
  productController.update_product_promotion
);

module.exports = router;
