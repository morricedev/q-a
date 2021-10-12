class AskController {
  async index(req, res) {
    res.render("ask");
  }
  async show(req, res) {}
  async store(req, res) {
    const title = req.body.title;
    const description = req.body.description;

    res.send(`Form recebido ${title} ${description}`);
  }
  async update(req, res) {}
  async delete(req, res) {}
}

module.exports = new AskController();
