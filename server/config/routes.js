const path = require('path');

const main = require('../controllers/main'),
    students = require('../controllers/students'),
    instructors = require('../controllers/instructors'),
    courses = require('../controllers/courses');

let requireAuthentication = function (request, response, next) {
    if (!request.authenticated) {
        return response.status(401).json({message: 'Unauthorized access.'});
    }
    next();
};

module.exports = function (app) {

    // all API calls require authentication
    app.all('/api/*', requireAuthentication);

    app.post('/login/student', function (request, response, next) {
        students.login(request, response, next);
    });

    app.post('/login/instructor', function (request, response, next) {
        instructors.login(request, response, next);
    });

    app.get('/logout', function (request, response, next) {
        main.logout(request, response, next);
    });

    app.post('/api/student', function (request, response, next) {
        students.create(request, response, next);
    });

    app.post('/api/instructor', function (request, response, next) {
        instructors.create(request, response, next);
    });

    app.post('/api/courses', function (request, response, next) {
        courses.create(request, response, next);
    });

    app.get('/api/:uri', function (request, response, next) {
        main.notFound(request, response, next);
    });

    app.get('*', function (request, response, next) {
        response.sendFile(path.resolve(__dirname, '../', '../', 'public', 'index.html'))
    });

};
