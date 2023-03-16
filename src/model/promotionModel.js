const dbConn = require("../connection/index");

const Promotion = (promotion) => {
  this.id = promotion.id;
};

Promotion.get_all_promotions = (result) => {
  dbConn.query(
    "select km_id, km_value, DATE_FORMAT( CONVERT_TZ(km_ngaybatdau, '+00:00', '+07:00'), '%d/%m/%Y') as ngaybatdau, DATE_FORMAT( CONVERT_TZ(km_ngayketthuc, '+00:00', '+07:00'), '%d/%m/%Y') as ngayketthuc from khuyen_mai",
    (err, q_result) => {
      if (err) {
        console.log(err);
      } else {
        result(q_result);
      }
    }
  );
};

Promotion.insert_promotion = (value, date_start, date_end, status) => {
  dbConn.query(
    `insert into khuyen_mai values (null, '${value}', '${date_start}', '${date_end}')`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        status("InsertSuccess");
      }
    }
  );
};

module.exports = Promotion;
