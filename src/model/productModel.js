const dbConn = require("../connection/index");

const Product = (product) => {
  this.id = product.id;
};

Product.insert_product = (ma, anh_sp, ten, sl, gia, mota, status) => {
  dbConn.query(
    `insert into san_pham (sp_id, sp_ma, sp_image, sp_ten, sp_tonkho, sp_gia, sp_mota) values (null, "${ma}", "${anh_sp}", "${ten}", "${sl}", "${gia}", "${mota}")`,
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

module.exports = Product;
