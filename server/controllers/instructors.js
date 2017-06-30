exports.login = function (request, response, next) {
    response.status(200).json({message: 'Login success', email: request.body.email, password: request.body.password});
};
