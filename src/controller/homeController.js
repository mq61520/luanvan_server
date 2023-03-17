const Home = require("../model/homeModel");

exports.get_category = (req, res) => {
  Home.select_all_category((result) => {
    res.send(result);
  });
};
