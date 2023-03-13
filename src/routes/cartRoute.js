const express = require("express");
const router = express.Router();

const cartController = require("../controller/cartController");

router.get("/cart/:user_id", cartController.get_amount_cart);
router.get("/cart_products/:user_id", cartController.get_products_cart);
router.post("/cart", cartController.add_to_cart);

module.exports = router;
