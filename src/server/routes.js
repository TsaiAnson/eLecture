var path = require('path');

var main = require('./controllers/main');

var requireAuthentication = function (request, response, next) {
    if (!request.authenticated) {
        response.redirect('/');
    }
};

module.exports = function (app) {

    // all API calls require authentication
    // app.all('/api/*', requireAuthentication);

    app.get('/api/:uri', function (request, response, next) {
        main.notFound(request, response, next);
    });

    app.get('*', function (request, response, next) {

    });

};
