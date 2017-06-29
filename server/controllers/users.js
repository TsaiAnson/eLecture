exports.login = function (request, response, next) {
    response.status(200).json({message: 'Login success', sid: request.body.sid, username: request.body.username});
};
