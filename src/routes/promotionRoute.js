const express = require("express");
const router = express.Router();

const productController = require("../controller/promotionController");

router.get("/promotions", productController.get_promotions);
router.get("/promotion_id/:id", productController.get_by_id);
router.post("/promotion_add", productController.add_promotion);

module.exports = router;
