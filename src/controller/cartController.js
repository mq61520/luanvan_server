const Cart = require("../model/cartModel");

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

exports.add_to_cart = (req, res) => {
  console.log(req.body.user_id, req.body.ma_sp, req.body.sl_sp);

  Cart.add_cart(req.body.user_id, req.body.ma_sp, req.body.sl_sp, (result) => {
    res.send(result);
  });
};
