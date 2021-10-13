const { Router } = require("express");
const router = new Router();

const responseController = require("../controllers/Response");

router.post("/answer", responseController.store);

module.exports = router;
