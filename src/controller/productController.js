const Product = require("../model/productModel");

exports.get_all = (req, res) => {
  Product.get_all_products((result) => {
    res.send(result);
  });
};

exports.add_product = (req, res) => {
  // console.log(req.body);

  var nameImage = req.body.anh_sp;

  Product.insert_product(
    req.body.ma_sp,
    nameImage,
    req.body.ten,
    req.body.sl,
    req.body.gia,
    req.body.mota,
    (status) => {
      res.send(status);
    }
  );
};

exports.add_images = (req, res) => {
  // console.log(req.files[0]);

  Product.insert_image(req.files[0].originalname, req.body.ma_sp, (result) => {
    res.send(result);
  });
};

exports.del_product = (req, res) => {
  Product.delete_product(req.body.ma_sp, (result) => {
    res.send(result);
  });
};
