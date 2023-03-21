const dbConn = require("../connection/index");

const Order = (order) => {
  this.id = order.id;
};

Order.create_order = (
  user_id,
  ngay_lap,
  dia_chi,
  sdt,
  tong_tien,
  htgh,
  httt,
  ghi_chu,
  ds_sp,
  status
) => {
  var query_str = `insert into don_hang values(null, '${user_id}','${ngay_lap}','${dia_chi}','${sdt}','${tong_tien}','${htgh}','${httt}','${ghi_chu}','Pending');`;
  //   console.log("model" + ds_sp[0].info.sp_ma);

  dbConn.query(query_str, (error) => {
    if (error) {
      console.log(error);
    } else {
      for (let i = 0; i < ds_sp.length; i++) {
        dbConn.query(
          `insert chi_tiet_don_hang values(null, '${ds_sp[i].info.sp_ma}','${ds_sp[i].sl}','${ds_sp[i].don_gia}');`,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              return;
            }
          }
        );
      }
      status("InsertSuccess");
    }
  });
};

module.exports = Order;
