const jwt = require('jsonwebtoken');
const status = require('http-status')
const { userModel } = require('../modal');
const logger = require('../config/logger');
const { ApiError } = require('../payload/ApiError');

const login = (email, password) => {
    logger.info("info the authentication is working");
    let user = userModel.getUserByEmailAndPassword(email, password);
    if (user.length <= 0) {
        throw new ApiError(status.UNAUTHORIZED, "email or password does not exist");
    }
    //create token
    let token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: '10m' });

    return { token };
}


module.exports = {
    login
};