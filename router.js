var registerUser = require('./Controller/registerUser');
var loginn = require('./Controller/loginn');
var logout = require('./Controller/logout');
var updateInfo = require('./Controller/updateInfo');
var addProducts = require('./Controller/addProducts');
var modifyProduct = require('./Controller/modifyProduct');
var viewUsers = require('./Controller/viewUsers');
var viewProducts = require('./Controller/viewProducts');
module.exports = function(app) {
    app.post('/registerUser', (req, res) => registerUser(req, res));
    app.post('/login', (req, res) => loginn(req, res));
    app.post('/logout', (req, res) => logout(req, res));
    app.post('/updateInfo', (req, res) => updateInfo(req, res));
    app.post('/addProducts', (req, res) => addProducts(req, res));
    app.post('/modifyProduct', (req, res) => modifyProduct(req, res));
    app.post('/viewUsers', (req, res) => viewUsers(req, res));
    app.post('/viewProducts', (req, res) => viewProducts(req, res));
};