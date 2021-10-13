const Question = require("../models/Question");

class QuestionController {
  async index(req, res) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.redirect("/");

    const question = await Question.findOne({ where: { id } });
    if (!question) return res.redirect("/");

    return res.render("question", { question });
  }
}

module.exports = new QuestionController();
