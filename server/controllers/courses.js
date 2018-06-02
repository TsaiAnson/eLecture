const mongoose = require("mongoose"),
    Course = mongoose.model("Course");

function generateCode() {
    let code = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return code;
}

exports.create = function (request, response, next) {
    let duplicate = null;
    do {
        request.body.code = generateCode();
        Course.findOne({ code: request.body.code }, function (error, course) {
            if (!error) {
                duplicate = course;
            } else {
                next(error);
            }
        });
    } while (duplicate);
    new Course(request.body).save(function (error, course) {
        if (!error) {
            response.status(200).json(course);
        } else {
            next(error);
        }
    });
};

exports.get = function (request, response, next) {
    Course.find({ _id: { $in: request.user.courses } }, function (error, courses) {
        if (!error) {
            response.status(200).json(courses);
        } else {
            next(error);
        }
    });
};
