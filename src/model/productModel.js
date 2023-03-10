const dbConn = require("../connection/index");

const Product = (product) => {
  this.id = product.id;
};

Product.get_all_products = (result) => {
  dbConn.query("select * from san_pham", (err, queryRes) => {
    result(queryRes);
  });
};

Product.insert_product = (ma, anh_sp, ten, sl, gia, mota, status) => {
  var trangthai;
  if (sl > 0) {
    trangthai = 1;
  } else {
    trangthai = 0;
  }

  dbConn.query(
    `insert into san_pham (sp_id, sp_ma, sp_image, sp_ten, sp_tonkho, sp_gia, sp_mota, sp_trangthai) values (null, "${ma}", "${anh_sp}", "${ten}", "${sl}", "${gia}", "${mota}", "${trangthai}")`,
    (err) => {
      if (err) {
        console.log(err);
        status("Add product fail");
      } else {
        status("Success product");
      }
    }
  );
};

Product.insert_image = (image, ma_sp, status) => {
  dbConn.query(
    `insert into hinh_anh(ha_id, ha_ten, sp_id) values (null, "${image}", "${ma_sp}")`,
    (err) => {
      if (err) {
        console.log(err);
        status("Add img fail");
      } else {
        status("Success img");
      }
    }
  );
};

Product.delete_product = (ma_sp, status) => {
  dbConn.query(`delete from san_pham where sp_ma = '${ma_sp}'`, (err1) => {
    if (err1) {
      console.log(err1);
    } else {
      dbConn.query(`delete from hinh_anh where sp_id = '${ma_sp}'`, (err2) => {
        if (err2) {
          console.log(err2);
        } else {
          status("Delete done");
        }
      });
    }
  });
};

module.exports = Product;
