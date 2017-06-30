exports.studentLogin = function (request, response, next) {
    response.status(200).json({message: 'Login student success', sid: request.body.sid, username: request.body.username});
};

exports.instructorLogin = function (request, response, next) {
    response.status(200).json({message: 'Login instructor success', email: request.body.email});
};
