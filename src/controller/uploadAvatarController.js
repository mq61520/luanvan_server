const AvatarModel = require("../model/uploadAvatarModel");

exports.upload_avatar = (req, res) => {
  console.log(req.files[0]);

  if (!req.files[0]) {
    res.send("No image");
    return;
  } else {
    AvatarModel.upload_avatar_by_id(
      req.body.id,
      req.files[0].filename,
      (status) => {
        res.send(status);
      }
    );
  }
};
