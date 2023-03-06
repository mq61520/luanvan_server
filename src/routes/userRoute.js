const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/user", userController.list);

router.get("/user_by_id/:id", userController.detail);

router.post("/user", userController.check_user);

module.exports = router;
