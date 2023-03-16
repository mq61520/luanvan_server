const dbConn = require("../connection/index");

const Cart = (cart) => {
  this.id = cart.id;
  this.items = [];
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

Cart.get_items_in_cart = (user_id) => {
  const cart_items = [];
  dbConn.query(
    `select * from gio_hang where nd_id = '${user_id}'`,
    async (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < q_result.length; i++) {
          dbConn.query(
            `select * from san_pham where sp_ma = '${q_result[i].sp_ma}'`,
            (err, product_info) => {
              cart_items.push({
                sl_sp: q_result[i].gh_soluong,
                info: JSON.parse(JSON.stringify(product_info)),
              });

              console.log(cart_items);
            }
          );
        }

        // await q_result.map((ma_sp) => {
        //   dbConn.query(
        //     `select * from san_pham where sp_ma = '${ma_sp.sp_ma}'`,
        //     (err, product_info) => {
        //       console.log({
        //         sl_sp: ma_sp.gh_soluong,
        //         info: JSON.parse(JSON.stringify(product_info)),
        //       });

        //       cart_items.push({
        //         sl_sp: ma_sp.gh_soluong,
        //         info: JSON.parse(JSON.stringify(product_info)),
        //       });

        //       console.log(cart_items);
        //     }
        //   );
        // });
        // result(cart_items);
      }
    }
  );
  console.log(cart_items);
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
    `select count(*) as check_sp from gio_hang where nd_id = '${user_id}' and sp_ma = '${ma_sp}'`,
    (err, check_sp) => {
      if (err) {
        console.log(err);
      } else if (check_sp[0].check_sp == 0) {
        dbConn.query(
          `insert into gio_hang(gh_id, nd_id, sp_ma, gh_soluong) values (null, '${user_id}', '${ma_sp}', '${sl_sp}')`,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              status({ type: "New", status: "Add success" });
            }
          }
        );
      } else {
        dbConn.query(
          `update gio_hang set  gh_soluong = gh_soluong + ${sl_sp} where nd_id = '${user_id}' and sp_ma = '${ma_sp}'`,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              status({ type: "Update", status: "Add success" });
            }
          }
        );
      }
    }
  );
};

Cart.delete = (user_id, ma_sp, status) => {
  dbConn.query(
    `delete from gio_hang where nd_id = '${user_id}' and sp_ma = '${ma_sp}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("DeleteSuccess");
      }
    }
  );
};

module.exports = Cart;
