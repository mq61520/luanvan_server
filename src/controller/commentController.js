const Comment = require("../model/commentModel");

exports.get_by_product = (req, res) => {
  Comment.select_by_product(req.params.ma_sp, (result) => {
    res.send(result);
  });
};

exports.add = (req, res) => {
  console.log(
    req.body.ma_sp,
    req.body.nd_ten,
    req.body.value,
    req.body.noidung
  );

  Comment.add_comment(
    req.body.ma_sp,
    req.body.nd_ten,
    req.body.value,
    req.body.noidung,
    (result) => {
      res.send(result);
    }
  );
};
