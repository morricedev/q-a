const express = require("express");
const { resolve } = require("path");
const dotenv = require("dotenv");
dotenv.config();

const homeRoutes = require("./routes/home");
const askRoutes = require("./routes/ask");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.set("view engine", "ejs");
    this.app.use(express.static(resolve(__dirname, "public")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/ask/", askRoutes);
  }
}

module.exports = new App().app;
