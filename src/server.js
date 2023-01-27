const express = require("express");
const cors = require("cors");
const route = require("./routes");
const bodyparser = require("body-parser");

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

route(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
