const Question = require("../models/Question");
const responseController = require("../controllers/Response");

class QuestionController {
  async index(req, res) {
    req.params.question_id = req.params.id;

    const id = Number(req.params.id);
    if (isNaN(id)) return res.redirect("/");

    const question = await Question.findOne({ where: { id } });
    if (!question) return res.redirect("/");

    const responses = await responseController.index(req, res);

    return res.render("question", { question, responses });
  }
}

module.exports = new QuestionController();
