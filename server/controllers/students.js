const mongoose = require("mongoose"),
    passport = require("passport"),
    Student = mongoose.model("Student"),
    Course = mongoose.model("Course");

exports.login = function (request, response, next) {
    passport.authenticate("student", function (error, student, info, next) {
        if (!error) {
            if (!student) {
                return response.status(401).json({ message: info.message });
            }
            request.logIn(student, function (error) {
                if (!error) {
                    return response.status(200).json({ username: request.body.username });
                } else {
                    return response.status(401).json({ message: error });
                }
            });
        } else {
            return next(error);
        }
    })(request, response, next);
};

exports.create = function (request, response, next) {
    Student.findOne({ sid: request.body.sid }, function (error, student) {
        if (!error) {
            if (!student) {
                Course.findOne({ code: request.body.course }, function (error, course) {
                    if (!error) {
                        if (course) {
                            request.body.courses = [course._id];
                            new Student(request.body).save(function (error, student) {
                                response.status(200);
                            });
                        } else {
                            response.status(400).json({ message: "Invalid course code." });
                        }
                    } else {
                        next(error);
                    }
                });
            } else {
                response.status(400).json({ message: "Student ID already exists." });
            }
        } else {
            next(error);
        }
    });
};
