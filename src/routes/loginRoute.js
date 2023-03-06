const express = require("express");
const router = express.Router();

const loginController = require("../controller/loginController");

router.get("/accounts", loginController.all_accounts);

router.get("/account_id/:id", loginController.account_by_id);

router.get("/account_role/:role", loginController.account_by_role);

router.post("/account", loginController.check_login);

module.exports = router;
