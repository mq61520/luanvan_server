const express = require("express");
const router = express.Router();

const recombeeController = require("../controller/recombeeController");

router.post("/recombee/add_detail_view", recombeeController.add_detail_view);
router.post(
  "/recombee/get_items_for_item",
  recombeeController.get_items_for_item
);
router.post(
  "/recombee/get_items_for_user",
  recombeeController.get_items_for_user
);

module.exports = router;
