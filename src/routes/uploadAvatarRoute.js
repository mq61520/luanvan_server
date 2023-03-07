const express = require("express");
const router = express.Router();
const upload = require("../common/upload");

const uploadAvatarController = require("../controller/uploadAvatarController");

router.post(
  "/upload_avatar",
  upload.array("image"),
  uploadAvatarController.upload_avatar
);

module.exports = router;
