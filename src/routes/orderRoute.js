const express = require("express");
const router = express.Router();

const orderController = require("../controller/orderController");

//order - custommer page
router.post("/order", orderController.get_order_by_id);
router.post("/order/status", orderController.get_order_by_status);
router.post("/order/add", orderController.add_order);

//order - admin page
router.get("/order/status/:status", orderController.get_order_by_status_admin);
router.get("/order/confirm/:ma_dh", orderController.confirm_order);
router.post("/order/update_status", orderController.change_order_status);

//detail order
router.get("/detail_order/:dh_id", orderController.get_detial_order);

module.exports = router;
