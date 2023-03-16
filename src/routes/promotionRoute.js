const express = require("express");
const router = express.Router();

const productController = require("../controller/promotionController");

router.get("/promotions", productController.get_promotions);
router.post("/promotion_add", productController.add_promotion);

module.exports = router;
