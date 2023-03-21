const dbConn = require("../connection/index");

const Profile = (profile) => {
  this.id = profile.id;
};

Profile.update_address = (address, user_id, status) => {
  dbConn.query(
    `update nguoi_dung set nd_diachi = '${address}' where nd_id = '${user_id}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateSuccess");
      }
    }
  );
};

Profile.update_phone_number = (phone_number, user_id, status) => {
  dbConn.query(
    `update nguoi_dung set nd_sdt = '${phone_number}' where nd_id = '${user_id}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateSuccess");
      }
    }
  );
};

Profile.update_phone_and_address = (phone_number, address, user_id, status) => {
  dbConn.query(
    `update nguoi_dung set nd_sdt = '${phone_number}' , nd_diachi = '${address}' where nd_id = '${user_id}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateSuccess");
      }
    }
  );
};

module.exports = Profile;
