const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "luan_van",
  multipleStatements: true,
});

connection.connect(function (err) {
  if (err) {
    console.log("Ket noi khong thanh cong");
  } else {
    console.log("Ket noi thanh cong");
  }
});

module.exports = connection;
