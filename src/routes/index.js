const registerRouter = require("./registerRoute");
const userRouter = require("./userRoute");
const homeRouter = require("./homeRoute");

function route(app) {
  app.use("/", userRouter);
  app.use("/", registerRouter);
  app.use("/", homeRouter);
}

module.exports = route;
