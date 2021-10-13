const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const Question = require("../models/Question");

const models = [Question];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

module.exports = connection;
