const Order = require("../model/orderModel");

exports.add_order = (req, res) => {
  console.log(
    req.body.user_id,
    req.body.ngay_lap,
    req.body.dia_chi,
    req.body.sdt,
    req.body.tong_tien,
    req.body.htgh,
    req.body.httt,
    req.body.ghi_chu,
    req.body.ds_sp
  );

  //   Order.create_order(
  //     req.body.user_id,
  //     req.body.ngay_lap,
  //     req.body.dia_chi,
  //     req.body.sdt,
  //     req.body.tong_tien,
  //     req.body.htgh,
  //     req.body.httt,
  //     req.body.ghi_chu,
  //     req.body.ds_sp,
  //     (result) => {
  //       res.send(result);
  //     }
  //   );
};
