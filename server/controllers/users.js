exports.logout = function (request, response, next) {
    request.logout();
    response.redirect('/');
};
