const Cart = require("../model/cartModel");
const Product = require("../model/productModel");

exports.get_amount_cart = (req, res) => {
  Cart.get_amount_cart(req.params.user_id, (result) => {
    res.send(result);
  });
};

exports.get_products_cart = (req, res) => {
  Cart.get_product_in_cart(req.params.user_id, (result) => {
    res.send(result);
  });
};

exports.get_items_cart = (req, res) => {
  var list_items = [];

  Cart.get_items_in_cart(req.params.user_id, async (result) => {
    result.map((cart_item) => {
      Product.get_product_by_id(cart_item.sp_ma, async (item) => {
        list_items.push(JSON.parse(JSON.stringify(item)));
      });
    });
    res.send(list_items);
  });
};

exports.add_to_cart = (req, res) => {
  console.log(req.body.user_id, req.body.ma_sp, req.body.sl_sp);

  Cart.add_cart(req.body.user_id, req.body.ma_sp, req.body.sl_sp, (result) => {
    res.send(result);
  });
};

exports.cart_delete = (req, res) => {
  console.log(req.body.user_id, req.body.ma_sp);

  Cart.delete(req.body.user_id, req.body.ma_sp, (result) => {
    res.send(result);
  });
};
