const mongoose = require('mongoose'),
    passport = require('passport'),
    Instructor = mongoose.model('Instructor');

exports.login = function (request, response, next) {
    passport.authenticate('instructor', function (error, instructor, info, next) {
        if (!error) {
            if (!instructor) {
                return response.status(401).json({message: info.message});
            }
            request.logIn(instructor, function (error) {
                if (!error) {
                    return response.status(200).json({name: instructor.name});
                } else {
                    return response.status(401).json({message: error});
                }
            });
        } else {
            return next(error);
        }
    })(request, response, next);
};

exports.create = function (request, response, next) {
    Instructor.findOne({email: request.body.email}, function (error, instructor) {
        if (!error) {
            if (!instructor) {
                let instructor = new Instructor(request.body);
                Instructor.encryptPassword(instructor.password, function (error, password) {
                    instructor.password = password;
                });
                instructor.save(function (error, instructor) {
                    if (!error) {
                        response.redirect('/login');
                    } else {
                        next(error);
                    }
                });
            } else {
                response.status(400).json({message: 'Email already exists.'});
            }
        } else {
            next(error);
        }
    });
};
