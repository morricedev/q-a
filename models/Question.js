const Sequelize = require("sequelize");
const { Model } = Sequelize;

module.exports = class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Por favor insira um título para sua pergunta",
            },
          },
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Por favor insira uma descrição para sua pergunta",
            },
          },
        },
      },
      { sequelize }
    );

    return this;
  }
};
