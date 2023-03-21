const express = require("express");
const router = express.Router();

const profileController = require("../controller/profileController");

router.post("/profile_address", profileController.address);
router.post("/profile_phone", profileController.phone);
router.post(
  "/profile/phone_address",
  profileController.change_phone_and_address
);

module.exports = router;
