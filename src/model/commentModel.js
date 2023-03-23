const dbConn = require("../connection/index");

const Comment = (comment) => {
  this.id = comment.id;
};

Comment.select_by_product = (ma_sp, result) => {
  dbConn.query(
    `select * from binh_luan where sp_ma = '${ma_sp}'`,
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Comment.add_comment = (ma_sp, nd_ten, value, noidung, result) => {
  dbConn.query(
    `insert into binh_luan values (null, '${ma_sp}', '${nd_ten}', '${value}', '${noidung}'); 
    update san_pham set sp_rate = (sp_rate + ${value})/2 where sp_ma = '${ma_sp}'`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        result("InsertSuccess");
      }
    }
  );
};

module.exports = Comment;
