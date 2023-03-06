const User = require("../model/loginModel");

exports.all_accounts = (req, res) => {
  User.get_all_accounts((result) => {
    res.send(result);
  });
};

exports.account_by_id = (req, res) => {
  User.get_account_by_id(req.params.id, (result) => {
    res.send(result);
  });
};

exports.account_by_role = (req, res) => {
  User.get_account_by_role(req.params.role, (result) => {
    res.send(result);
  });
};

exports.check_login = (req, res) => {
  User.check_account(req.body.loginname, req.body.loginpwd, (result) => {
    res.send(result);
  });
};
