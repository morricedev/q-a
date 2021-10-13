const { Router } = require("express");
const router = new Router();

const homeControllers = require("../controllers/Home");

router.get("/", homeControllers.index);

module.exports = router;
