const express = require("express");
const router = express.Router();

const orderController = require("../controller/orderController");

//order
router.post("/order", orderController.get_all_order);
router.post("/order/status", orderController.get_order_by_status);
router.post("/order/add", orderController.add_order);

//detail order
router.get("/detail_order/:dh_id", orderController.get_detial_order);

module.exports = router;
