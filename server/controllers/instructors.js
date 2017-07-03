const mongoose = require('mongoose'),
    passport = require('passport'),
    Instructor = mongoose.model('Instructor');

exports.login = function (request, response, next) {
    passport.authenticate('instructor', function (error, instructor) {
        if (!error) {
            if (!instructor) {
                response.redirect('/');
            }
            request.logIn(instructor, function (error) {
                if (!error) {
                    response.status(200).json(instructor);
                } else {
                    response.status(401).json({message: error});
                }
            });
        } else {
            next(error);
        }
    });
};

exports.create = function (request, response, next) {
    Instructor.findOne({email: request.body.email}, function (error, instructor) {
        if (!error) {
            if (!instructor) {
                let instructor = new Instructor(request.body);
                instructor.encryptPassword(function (error, password) {
                    console.log(password);
                });
                instructor.save(function (error, instructor) {
                    if (!error) {
                        response.status(200).json(instructor);
                    } else {
                        next(error);
                    }
                });
            } else {
                next(new Error('Email already exists.'));
            }
        } else {
            next(error);
        }
    });
};
