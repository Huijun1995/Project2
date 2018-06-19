var sequelize = require('./Connect')
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    fname: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    lname: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    address: {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: true
        }
    },
    city: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    state: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    },
    zip: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }
    }
},
//     {
//     validate:{
//         validateError() {
//             if(this.fname === "" || this.lname === "" || this.address === "" || this.city === "" || this.state === ""
//                 || this.email === "" || this.username === "" || this.password === ""){
//                 throw new Error()
//             }
//         }
//     }
// }
);

module.exports = User;