const dbConn = require("../connection/index");

const User = function (user) {
  this.id = user.id;
  this.name = user.name;
  this.gender = user.gender;
};

User.get_list = (result) => {
  dbConn.query("select * from accounts", (err, user) => {
    if (err) {
      console.log(err);
    } else result(user);
  });
};

User.checkUser = (username, pwd, kq) => {
  dbConn.query(
    `select count(*) as isHas from accounts where username = '${username}' and pwd = '${pwd}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else kq(result);
    }
  );
};

User.get_by_id = (id, result) => {
  dbConn.query("select * from accounts where id = ?", id, (err, user) => {
    if (err) {
      console.log(err);
    } else result(user);
  });
};

module.exports = User;
