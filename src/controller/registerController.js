const Account = require("../model/registerModel");

exports.register = (req, res) => {
  console.log(req.body);
  Account.add(req.body.e, req.body.p, (result) => {
    res.send(result);
  });
};
