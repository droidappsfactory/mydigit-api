const httpStatus = require('http-status-codes');


const handler = (err, req, res, next) => {

    const response = {
        code: err.status || httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message || httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
        errors: err.errors,
        stack: err.stack
    }

    // if (env !== 'development') {
    //     delete response.stack;
    // }

    res.status(response.code);
    res.json(response);
    res.end();
}

exports.handler = handler;


exports.notFound = (req, res, next) => {

    const err = {
        message: 'Not Found',
        status: httpStatus.NOT_FOUND
    }
    return handler(err, req, res);
}