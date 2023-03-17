const express = require("express");
const router = express.Router();

const homeController = require("../controller/homeController");

router.get("/category", homeController.get_category);

module.exports = router;
