const { Router } = require("express");
const router = new Router();

const askController = require("../controllers/Ask");

router.get("/", askController.index);

router.post("/store", askController.store);

module.exports = router;
