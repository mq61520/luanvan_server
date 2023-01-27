const dbConn = require("../connection/index");

const Account = function (acc) {
  this.id = acc.id;
  this.email = acc.email;
  this.pwd = acc.pwd;
};

Account.add = (email, pwd, result) => {
  dbConn.query(
    `insert into accounts values (null, '${email}', '${pwd}')`,
    (err) => {
      if (err) {
        console.log(err);
      } else result("oke");
    }
  );
};

module.exports = Account;
