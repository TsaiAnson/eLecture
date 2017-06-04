var main = require('./controllers/main');

module.exports = function (app) {

    // Main
    app.get('/', function (request, response, next) {
        main.index(request, response, next);
    });

    app.get('/*', function (request, response, next) {
        main.notFound(request, response, next);
    });

};