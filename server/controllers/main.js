exports.logout = function (request, response, next) {
    request.logout();
    response.redirect('/');
};

exports.notFound = function (request, response, next) {
    response.status(404).json({message: 'Not Found', uri: request.params['uri']});
};
