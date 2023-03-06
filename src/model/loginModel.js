const dbConn = require("../connection/index");
const md5 = require("md5");

const User = function (user) {
  this.id = user.id;
};

User.get_all_accounts = (result) => {
  dbConn.query("select * from nguoi_dung", (err, user) => {
    if (err) {
      console.log(err);
    } else result(user);
  });
};

User.get_account_by_id = (id, result) => {
  dbConn.query(
    "select * from nguoi_dung where nd_id = ?",
    id,
    (err, account) => {
      if (err) {
        console.log(err);
      } else result(account);
    }
  );
};

User.get_account_by_role = (role, result) => {
  dbConn.query(
    "select * from nguoi_dung where nd_role = ?",
    role,
    (err, account) => {
      if (err) {
        console.log(err);
      } else result(account);
    }
  );
};

User.check_account = (loginname, loginpwd, kq) => {
  dbConn.query(
    `select count(*) as exist, nd_role, nd_hoten from nguoi_dung where nd_loginname = '${loginname}' and nd_loginpwd = '${md5(
      loginpwd
    )}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else kq(result);
    }
  );
};

module.exports = User;
