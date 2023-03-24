const dbConn = require("../connection/index");

const Order = (order) => {
  this.id = order.id;
};

Order.select_by_id = (user_id, result) => {
  dbConn.query(
    `select * from don_hang where nd_id = '${user_id}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Order.select_by_status = (user_id, trang_thai, result) => {
  var sql = "";
  if (trang_thai === "all") {
    sql += `select * from don_hang where nd_id = '${user_id}'`;
  } else {
    sql += `select * from don_hang where nd_id = '${user_id}' and dh_trangthai = '${trang_thai}'`;
  }

  dbConn.query(sql, (err, q_result) => {
    if (err) {
      console.log(err);
    } else {
      result(q_result);
    }
  });
};

Order.select_by_status_admin = (trang_thai, result) => {
  var sql = "";
  if (trang_thai == "all") {
    sql = `select dh_id, dh_ma, nd_id, DATE_FORMAT( CONVERT_TZ(dh_ngaylap, '+00:00', '+07:00'), '%d/%m/%Y') as ngaylap, 
  dh_diachi, dh_sdt, dh_slsp, dh_tongtien, dh_httt, dh_htgh, dh_ghichu, dh_trangthai from don_hang`;
  } else {
    sql = `select dh_id, dh_ma, nd_id, DATE_FORMAT( CONVERT_TZ(dh_ngaylap, '+00:00', '+07:00'), '%d/%m/%Y') as ngaylap, 
  dh_diachi, dh_sdt, dh_slsp, dh_tongtien, dh_httt, dh_htgh, dh_ghichu, dh_trangthai from don_hang where dh_trangthai = '${trang_thai}'`;
  }

  dbConn.query(sql, (err, q_result) => {
    if (err) {
      console.log(err);
    } else {
      result(q_result);
    }
  });
};

Order.create_order = (
  user_id,
  ngay_lap,
  dia_chi,
  sdt,
  slsp,
  tong_tien,
  htgh,
  httt,
  ghi_chu,
  ds_sp,
  status
) => {
  var dh_ma = "DH-" + Date.now();
  var query_str = `insert into don_hang values(null, '${dh_ma}', '${user_id}', '${ngay_lap}', '${dia_chi}', '${sdt}', ${slsp}, ${tong_tien}, '${htgh}', '${httt}', '${ghi_chu}', 'Pending');`;
  //   console.log("model" + ds_sp[0].info.sp_ma);

  dbConn.query(query_str, (error) => {
    if (error) {
      console.log(error);
    } else {
      for (let i = 0; i < ds_sp.length; i++) {
        var ma_sp = ds_sp[i].info.sp_ma;
        var ten_sp = ds_sp[i].info.sp_ten;
        var image_sp = ds_sp[i].info.sp_image;
        // console.log("model" + ds_sp[i].info.sp_ma);

        dbConn.query(
          `insert chi_tiet_don_hang values(null,'${dh_ma}', '${ma_sp}', '${ten_sp}', '${image_sp}','${ds_sp[i].sl}','${ds_sp[i].don_gia}');`,
          (insert_err) => {
            if (insert_err) {
              console.log(insert_err);
            } else {
              return;
            }
          }
        );

        dbConn.query(
          `delete from gio_hang where nd_id = '${user_id}' and sp_ma = '${ma_sp}'`,
          (delete_err) => {
            if (delete_err) {
              console.log(delete_err);
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

Order.confirm = (ma_dh, status) => {
  dbConn.query(
    `update don_hang set dh_trangthai = 'Preparing' where dh_ma ='${ma_dh}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("Confirmed");
      }
    }
  );
};

Order.update_order_status = (ma_dh, trang_thai, status) => {
  dbConn.query(
    `update don_hang set dh_trangthai = '${trang_thai}' where dh_ma ='${ma_dh}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateStatusSuccess");
      }
    }
  );
};

Order.select_detail_order = (order_id, result) => {
  dbConn.query(
    `select * from chi_tiet_don_hang where dh_ma = '${order_id}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

module.exports = Order;
