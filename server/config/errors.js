module.exports = function (app) {

    app.use(function (error, request, response, next) {
        if (response.headersSent) {
            return next(err)
        }

        if (process.env.NODE_ENV === 'development') {
            console.error(error.stack);
            console.error(error.message);
        }
        response.status(500).send({status: error.status, message: error.message});
    });

};
