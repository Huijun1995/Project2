var sequelize = require('./Connect')
const Sequelize = require('sequelize');

const Product = sequelize.define('product', {
    asin: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    productName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    productDescription: {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: true
        }
    },
    group: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
});


module.exports = Product;