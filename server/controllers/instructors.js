const mongoose = require('mongoose'),
    Instructor = mongoose.model('Instructor');

exports.login = function (request, response, next) {
    response.status(200).json({message: 'Login success', email: request.body.email, password: request.body.password});
};

exports.create = function (request, response, next) {
    new Instructor(request.body).save(function (error, instructor) {
        if (!error) {
            response.status(200).json(instructor);
        } else {
            next(error);
        }
    });
};
