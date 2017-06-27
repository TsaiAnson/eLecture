const path = require('path');

const main = require('./controllers/main');

let requireAuthentication = function (request, response, next) {
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
        response.sendFile(path.resolve(__dirname, '../', 'public', 'index.html'))
    });

};
