const home = require("./home");

module.exports = app => {
  app.use("", home);
  app.use("*", (req, res) => res.render("404"));
  // app.use("/photos", photos);
  // etc..
};
