const mongoose = require('mongoose'),
    Student = mongoose.model('Student'),
    Course = mongoose.model('Course');

exports.login = function (request, response, next) {
    response.status(200).json({message: 'Login success', sid: request.body.sid, username: request.body.username});
};

exports.create = function (request, response, next) {
    Course.find({code: request.body.course}, function (error, course) {
        if (!error) {
            if (course) {
                request.body.courses = [course._id];
                new Student(request.body).save(function (error, student) {
                    response.status(200).json(student);
                });
            } else {
                response.status(400).json({message: 'Invalid course'});
            }
        }
    });
};
