const { Sequelize } = require('sequelize');

// Cria uma instância do Sequelize e conecta ao banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite' // dc
});

module.exports = sequelize;

