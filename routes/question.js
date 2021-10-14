const { Router } = require("express");
const router = new Router();

const questionController = require("../controllers/Question");

router.get("/:id", questionController.index);

module.exports = router;
