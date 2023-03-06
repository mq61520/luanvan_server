const homeRouter = require("./homeRoute");
const loginRouter = require("./loginRoute");
const registerRouter = require("./registerRoute");
// const userRouter = require("./userRoute");

function route(app) {
  app.use("/", homeRouter);
  app.use("/", loginRouter);
  app.use("/", registerRouter);
  // app.use("/", userRouter);
}

module.exports = route;
