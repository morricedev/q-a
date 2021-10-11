const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const homeRoutes = require("./routes/home");

class App {
  constructor() {
    this.app = express();
    this.app.set("view engine", "ejs");
    this.routes();
  }

  middlewares() {}

  routes() {
    this.app.use("/", homeRoutes);
  }
}

module.exports = new App().app;
