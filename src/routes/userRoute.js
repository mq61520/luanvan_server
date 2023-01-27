const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.get("/user", userController.list);

router.post("/user", userController.check_user);

router.get("/user/:id", userController.detail);

module.exports = router;
