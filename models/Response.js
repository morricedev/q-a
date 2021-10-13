const Sequelize = require("sequelize");
const { Model } = Sequelize;

module.exports = class Response extends Model {
  static init(sequelize) {
    super.init(
      {
        body: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Insira uma resposta para esta pergunta",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Question, { foreignKey: "question_id" });
  }
};
