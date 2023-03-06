const dbConn = require("../connection/index");
const md5 = require("md5");

const Account = function (acc) {
  this.id = acc.id;
  this.email = acc.email;
  this.pwd = acc.pwd;
};

Account.add_customer_account = (username, loginname, loginpwd, status) => {
  dbConn.query(
    "select count(*) as exist from nguoi_dung where nd_loginname = ?",
    loginname,
    (err, result) => {
      if (err) {
        console.log(err);
      }

      if (result[0].exist > 0) {
        status("Username available");
        // console.log("Username available");
        return;
      } else {
        dbConn.query(
          `insert into nguoi_dung(nd_id, nd_role, nd_hoten, nd_loginname, nd_loginpwd) 
            values (null, '2', '${username}', '${loginname}', '${md5(
            loginpwd
          )}')`,
          (err) => {
            if (err) {
              console.log(err);
            } else status("Success");
          }
        );
      }
    }
  );
};

module.exports = Account;
