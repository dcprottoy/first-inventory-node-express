const { Sequelize } = require('sequelize');
var initModels = require("./init-models");

const sequelize = new Sequelize('first_inventory', 'root', '123456', {
    host: 'localhost',
    dialect:'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });


const db = {};
db.models = initModels(sequelize, Sequelize);
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;