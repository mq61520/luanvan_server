const AvatarModel = require("../model/uploadAvatarModel");

exports.upload_avatar = (req, res) => {
  console.log(req.body.id, req.files[0].path);

  AvatarModel.upload_avatar_by_id(
    req.body.id,
    req.files[0].filename,
    (status) => {
      res.send(status);
    }
  );
};
