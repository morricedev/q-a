const { Router } = require("express");
const router = new Router();

const questionControllers = require("../controllers/Question");

router.get("/:id", questionControllers.index);

module.exports = router;
