const express = require("express");
const router = express.Router();

const commentController = require("../controller/commentController");

router.get("/comment/:ma_sp", commentController.get_by_product);
router.post("/comment/add", commentController.add);

module.exports = router;
