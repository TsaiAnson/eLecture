const mongoose = require('mongoose'),
    passport = require('passport'),
    Student = mongoose.model('Student'),
    Course = mongoose.model('Course');

exports.login = function (request, response, next) {
    passport.authenticate('student', function (error, student) {
        if (!error) {
            if (!student) {
                response.redirect('/');
            }
            request.logIn(student, function (error) {
                if (!error) {
                    response.status(200).json(student);
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
    Student.findOne({sid: request.body.sid}, function (error, student) {
        if (!error) {
            if (!student) {
                Course.findOne({code: request.body.course}, function (error, course) {
                    if (!error) {
                        if (course) {
                            request.body.courses = [course._id];
                            new Student(request.body).save(function (error, student) {
                                response.status(200).json(student);
                            });
                        } else {
                            response.status(400).json({message: 'Invalid course'});
                        }
                    } else {
                        next(error);
                    }
                });
            } else {
                next(new Error('Student ID already exists.'));
            }
        } else {
            next(error);
        }
    });
};
