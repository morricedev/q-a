const Response = require("../models/Response");

class ResponseController {
  async index(req, res) {
    const question_id = req.params.question_id;

    const responses = await Response.findAll({
      where: { question_id },
      raw: true,
      order: [["id", "DESC"]],
    });

    return responses;
  }

  async store(req, res) {
    await Response.create(req.body);

    return res.redirect(`/question/${req.body.question_id}`);
  }
}

module.exports = new ResponseController();
