const status = require('http-status');
const { ApiError } = require('../payload/ApiError');
const { ApiResponse } = require('../payload/ApiError');
const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    let token = req.headers['accesstoken'];
    if (!token) {
        throw new ApiError(401, "Please enter a token to access users");
        //res.status(401).send("Please enter a token to access users");
    }

    let response = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (response) next();
    throw new ApiError(401, "your token is expired, please logina again");
};


module.exports = { auth };