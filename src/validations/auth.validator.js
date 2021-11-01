const joi = require('joi');
const login = joi.object({
    email: joi.string().email().required(),
    password: joi.string(),
    age: joi.number().max(150).optional(),
    email: joi.string().email().optional()
});
module.exports = {
    login
}