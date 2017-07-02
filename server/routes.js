const path = require('path');

const main = require('./controllers/main'),
    students = require('./controllers/students'),
    instructors = require('./controllers/instructors'),
    courses = require('./controllers/courses');

let requireAuthentication = function (request, response, next) {
    // if (!request.authenticated) {
    //     response.redirect('/');
    // }
    next();
};

module.exports = function (app) {

    // all API calls require authentication
    app.all('/api/*', requireAuthentication);

    app.post('/api/student/login', function (request, response, next) {
        students.login(request, response, next);
    });

    app.post('/api/instructor/login', function (request, response, next) {
        instructors.login(request, response, next);
    });

    app.post('/api/student', function (request, response, next) {
        students.create(request, response, next);
    });

    app.post('/api/instructor', function (request, response, next) {
        instructors.create(request, response, next);
    });

    app.post('/api/course', function (request, response, next) {
        courses.create(request, response, next);
    });

    app.get('/api/:uri', function (request, response, next) {
        main.notFound(request, response, next);
    });

    app.get('*', function (request, response, next) {
        response.sendFile(path.resolve(__dirname, '../', 'public', 'index.html'))
    });

};
