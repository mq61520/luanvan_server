const dbConn = require("../connection/index");

const Cart = (cart) => {
  this.id = cart.id;
};

Cart.get_product_in_cart = (user_id, result) => {
  dbConn.query(
    `select * from gio_hang where nd_id = '${user_id}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Cart.get_amount_cart = (user_id, result) => {
  dbConn.query(
    "select count(*) as amount_cart from gio_hang where nd_id = ?",
    user_id,
    (err, sqlResult) => {
      if (err) {
        console.log(err);
      } else {
        result(sqlResult);
      }
    }
  );
};

Cart.add_cart = (user_id, ma_sp, sl_sp, status) => {
  dbConn.query(
    `insert into gio_hang(gh_id, nd_id, sp_ma, gh_soluong) values (null, '${user_id}', '${ma_sp}', '${sl_sp}')`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("Add success");
      }
    }
  );
};

module.exports = Cart;
