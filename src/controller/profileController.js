const Profile = require("../model/profileModel");

exports.address = (req, res) => {
  Profile.update_address(req.body.address, req.body.user_id, (result) => {
    res.send(result);
  });
};

exports.phone = (req, res) => {
  Profile.update_phone_number(req.body.phone, req.body.user_id, (result) => {
    res.send(result);
  });
};

exports.change_phone_and_address = (req, res) => {
  console.log(req.body.phone, req.body.address, req.body.user_id);

  Profile.update_phone_and_address(
    req.body.phone,
    req.body.address,
    req.body.user_id,
    (result) => {
      res.send(result);
    }
  );
};
