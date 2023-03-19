const Product = require("../model/productModel");

exports.get_all = (req, res) => {
  Product.get_all_products((result) => {
    res.send(result);
  });
};

exports.get_product_id = (req, res) => {
  // console.log(req.params.id);

  Product.get_product_by_id(req.params.id, (result) => {
    res.json(result);
  });
};

exports.check_code = (req, res) => {
  Product.check_code_product(req.params.ma_sp, (result) => {
    res.send(result);
  });
};

exports.get_images_id = (req, res) => {
  Product.get_images_by_id(req.params.id, (result) => {
    res.send(result);
  });
};

exports.get_product_category = (req, res) => {
  // console.log(req.params.type);

  Product.get_product_by_category(req.params.type, (result) => {
    res.json(result);
  });
};

exports.get_product_brand = (req, res) => {
  // console.log(req.params.type);

  Product.get_product_by_brand(req.params.brand, (result) => {
    res.json(result);
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
    req.body.danhmuc,
    req.body.thuonghieu,
    (status) => {
      res.send(status);
    }
  );
};

exports.add_images = (req, res) => {
  console.log(req.files[0].originalname);

  Product.insert_image(req.files[0].originalname, req.body.ma_sp, (result) => {
    res.send(result);
  });
};

exports.del_product = (req, res) => {
  Product.delete_product(req.body.ma_sp, (result) => {
    res.send(result);
  });
};

exports.update_product_amount = (req, res) => {
  Product.update_amount(req.body.ma_sp, req.body.sl, (result) => {
    res.send(result);
  });
};

exports.update_product_promotion = (req, res) => {
  console.log(req.body.ma_sp, req.body.km_id);

  Product.update_promotion(req.body.ma_sp, req.body.km_id, (result) => {
    res.send(result);
  });
};
