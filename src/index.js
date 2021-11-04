const express = require('express');
require('dotenv').config();
let bodyparser = require('body-parser');
const checkfunction = require('./config/database')
let morganMiddleware = require('./middlewares/morgan');
const app = express();
const port = process.env.PORT;
const httpStatus = require('http-status');


/**
 * middleware routes
 */
let mycatalog = require('./route/v1');
const { ApiError } = require('./payload/ApiError');

/**
 * middlewares
 */
app.use(express.json());
app.use(morganMiddleware);
app.use(process.env.API_VERSION, mycatalog);
//Unknown API Error Handling
app.use((req, res) => {
    let error = "Api not found";
    let status = httpStatus.NOT_FOUND;
    res.status(status).send(new ApiError(status, error));

});

app.use((err, req, res, next) => {
    if (err) {
        res.status(err.status).send(err);
    }

});


app.listen(port, () => {

    console.log(`the app is listening on ${process.env.URL_BASE}:${port}`);
});