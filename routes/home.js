const { Router } = require("express");
const router = new Router();

const homeController = require("../controllers/Home");

router.get("/", homeController.index);

module.exports = router;
