//import status code module
const status = require('http-status');
const logger = require('../config/logger');
const { ApiResponse } = require('../payload/ApiResponse');
const { authService } = require('../services')
    // i have exported the controller
exports.login = (req, res) => {
    logger.info("info  is working");
    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = authService.login(email, password);

    res.status(status.OK)
        .send(new ApiResponse(status.OK, message = 'Good! you are loggedin', loginResponse));
};

exports.signup = (req, res) => {
    res.status(status.OK)
        .send(new ApiResponse(status.OK, message = 'Good! you are signed up '));
}