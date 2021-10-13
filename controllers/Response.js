const Response = require("../models/Response");

class ResponseController {
  async store(req, res) {
    await Response.create(req.body);

    return res.redirect(`/question/${req.body.question_id}`);
  }
}

module.exports = new ResponseController();
