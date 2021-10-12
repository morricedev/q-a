const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  res.render("ask");
});

module.exports = router;
