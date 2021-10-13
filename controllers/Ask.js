const Question = require("../models/Question");
class AskController {
  async index(req, res) {
    return res.render("ask");
  }

  async store(req, res) {
    await Question.create(req.body);

    return res.redirect("/");
  }
}

module.exports = new AskController();
