const homeRouter = require("./homeRoute");
const loginRouter = require("./loginRoute");
const registerRouter = require("./registerRoute");
const uploadAvatar = require("./uploadAvatarRoute");
const brandRouter = require("./brandRoute");
const productRouter = require("./productRoute");
const cartRouter = require("./cartRoute");
const promotionRouter = require("./promotionRoute");
const profileRouter = require("./profileRoute");
const orderRouter = require("./orderRoute");

function route(app) {
  app.use("/", homeRouter);
  app.use("/", loginRouter);
  app.use("/", registerRouter);
  app.use("/", uploadAvatar);
  app.use("/", brandRouter);
  app.use("/", productRouter);
  app.use("/", cartRouter);
  app.use("/", promotionRouter);
  app.use("/", profileRouter);
  app.use("/", orderRouter);
}

module.exports = route;
