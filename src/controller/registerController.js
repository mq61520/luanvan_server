const Account = require("../model/registerModel");

exports.register = (req, res) => {
  console.log(req.body);

  Account.add_customer_account(
    req.body.username,
    req.body.loginname,
    req.body.loginpwd,

    (result) => {
      res.send(result);
    }
  );
};
