const multer = require("multer");
const { join } = require("path");
const path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images/"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({
  storage: storage,
});

module.exports = upload;
