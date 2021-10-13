const Question = require("../models/Question");

class HomeController {
  async index(req, res) {
    // raw: true = traz apenas os dados
    const questions = await Question.findAll({
      raw: true,
      order: [["id", "DESC"]],
    });

    return res.render("index", { questions });
  }
}

module.exports = new HomeController();
