const Promotion = require("../model/promotionModel");

exports.get_promotions = (req, res) => {
  Promotion.get_all_promotions((result) => {
    res.send(result);
  });
};

exports.add_promotion = (req, res) => {
  console.log(req.body.value, req.body.date_start, req.body.date_end);

  if (
    req.body.value == "" ||
    req.body.date_start == "" ||
    req.body.date_end == ""
  ) {
    res.send("AddFail");
  } else {
    Promotion.insert_promotion(
      req.body.value,
      req.body.date_start,
      req.body.date_end,
      (result) => {
        res.send(result);
      }
    );
  }
};
