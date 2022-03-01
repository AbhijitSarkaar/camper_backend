const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message; //message is an inherited property from Error

    //object id error
    if (err.name === 'CastError') {
        error = new ErrorResponse(
            `Bootcamp not found with id ${err.value}`,
            404
        );
    }

    //duplicate key error
    if (err.code === 11000) {
        error = new ErrorResponse(`[error] Duplicate field value entered`, 400);
    }
    console.log(err);

    //property value validation error
    if (error.name === 'ValidationError') {
        const message = Object.values(err.errors).map((item) => item.message);
        error = new ErrorResponse(error.message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error',
    });
};

module.exports = errorHandler;
