const User = require("../model/userModel");

exports.list = (req, res) => {
  User.get_list((result) => {
    res.send(result);
  });
};

exports.check_user = (req, res) => {
  User.checkUser(req.body.e, req.body.p, (result) => {
    res.send(result);
  });
};

exports.detail = (req, res) => {
  User.get_by_id(req.params.id, (result) => {
    res.send(result);
  });
};
