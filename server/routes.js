const path = require('path');

const main = require('./controllers/main'),
    users = require('./controllers/users');

let requireAuthentication = function (request, response, next) {
    // if (!request.authenticated) {
    //     response.redirect('/');
    // }
    next();
};

module.exports = function (app) {

    // all API calls require authentication
    app.all('/api/*', requireAuthentication);

    app.post('/api/login', function (request, response, next) {
        users.login(request, response, next);
    });

    app.get('/api/:uri', function (request, response, next) {
        main.notFound(request, response, next);
    });

    app.get('*', function (request, response, next) {
        response.sendFile(path.resolve(__dirname, '../', 'public', 'index.html'))
    });

};
