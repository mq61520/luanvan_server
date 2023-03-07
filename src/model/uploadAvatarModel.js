const dbConn = require("../connection/index");

const Avatar = (avt) => {
  this.id = avt.id;
};

Avatar.upload_avatar_by_id = (id, image, status) => {
  dbConn.query(
    `update nguoi_dung set nd_avatar = '${image}'  where nd_id = '${id}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else status("Oke");
    }
  );
};

module.exports = Avatar;
