const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");

const Question = require("../models/Question");
const Response = require("../models/Response");

const models = [Question, Response];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);

module.exports = connection;
