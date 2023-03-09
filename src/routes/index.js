const homeRouter = require("./homeRoute");
const loginRouter = require("./loginRoute");
const registerRouter = require("./registerRoute");
const uploadAvatar = require("./uploadAvatarRoute");
const brandRouter = require("./brandRoute");
const productRouter = require("./productRoute");

function route(app) {
  app.use("/", homeRouter);
  app.use("/", loginRouter);
  app.use("/", registerRouter);
  app.use("/", uploadAvatar);
  app.use("/", brandRouter);
  app.use("/", productRouter);
}

module.exports = route;
