const dbConn = require("../connection/index");

const Product = (product) => {
  this.id = product.id;
};

Product.get_all_products = (result) => {
  dbConn.query("select * from san_pham", (err, queryRes) => {
    if (err) {
      console.log(err);
    } else {
      result(queryRes);
    }
  });
};

Product.get_product_by_id = (ma_sp, result) => {
  dbConn.query(
    `select * from san_pham where sp_ma = '${ma_sp}'`,
    (err, queryRes) => {
      if (err) {
        console.log(err);
      } else {
        result(queryRes);
      }
    }
  );
};

Product.get_images_by_id = (ma_sp, result) => {
  dbConn.query(
    `select * from hinh_anh where sp_id = '${ma_sp}'`,
    (err, imgRes) => {
      if (err) {
        console.log(err);
      } else {
        result(imgRes);
      }
    }
  );
};

Product.check_code_product = (ma_sp, result) => {
  dbConn.query(
    `select count(*) as exist from san_pham where sp_ma = '${ma_sp}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Product.insert_product = (
  ma,
  anh_sp,
  ten,
  sl,
  gia,
  mota,
  danhmuc,
  thuonghieu,
  status
) => {
  dbConn.query(
    `insert into san_pham (sp_id, sp_ma, sp_image, sp_ten, sp_tonkho, sp_gia, sp_mota, sp_danhmuc, sp_thuonghieu) values (null, "${ma}", "${anh_sp}", "${ten}", "${sl}", "${gia}", "${mota}", "${danhmuc}", "${thuonghieu}")`,
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

Product.update_amount = (ma_sp, sl, status) => {
  dbConn.query(
    `update san_pham set sp_tonkho = '${sl}' where sp_ma = '${ma_sp}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdateAmountSuccess");
      }
    }
  );
};

Product.update_promotion = (ma_sp, km_id, status) => {
  dbConn.query(
    `update san_pham set sp_khuyenmai = '${km_id}' where sp_ma = '${ma_sp}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("UpdatePromotionSuccess");
      }
    }
  );
};

module.exports = Product;
