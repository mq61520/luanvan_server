const dbConn = require("../connection/index");

const Home = (home) => {
  this.id = home.id;
};

Home.select_all_category = (result) => {
  dbConn.query("select * from danh_muc", (err, queryRes) => {
    if (err) {
      console.log(err);
    } else {
      result(queryRes);
    }
  });
};

module.exports = Home;
