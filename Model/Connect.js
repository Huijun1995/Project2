const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    database: 'ass2',
    username: 'root',
    password: '102564',
    dialect: 'mysql',
    host: 'localhost',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = sequelize;