// // Not found handler
// const notFound = (req, res, next) => {
//     const error = new Error(`Not Found - ${req.originalUrl}`);
//     res.status(404);
//     next(error);
// };

// // Error handler
// const errorHandler = (err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode).json({
//         message: err.message,
//         // stack: process.env.NODE_ENV === "production" ? null: err.stack,
//     })
// };

// module.exports = {notFound, errorHandler}



// Not Found middleware
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
};

// Global Error Handler
const errorHandler = (err, req, res, next) => {
    // If response is already sent, delegate to default Express handler
    if (res.headersSent) {
        return next(err);
    }

    const statusCode = err.statusCode || res.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        // stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
};

module.exports = {
    notFound,
    errorHandler,
};
