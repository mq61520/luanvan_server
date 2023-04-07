const express = require("express");
const router = express.Router();
const upload = require("../common/upload");

const recommendController = require("../controller/recommendController");

router.post("/detect", upload.array("image"), recommendController.detect);

module.exports = router;
