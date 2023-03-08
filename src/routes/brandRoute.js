const express = require("express");
const router = express.Router();

const brandController = require("../controller/brandController");

router.get("/brands", brandController.get_all_brand);
router.get("/brands_id/:id", brandController.get_all_brand_by_id);

module.exports = router;
