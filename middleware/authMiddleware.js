
const authMiddleware = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message
    })
}

module.exports = authMiddleware;
