'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    mongoose = require('mongoose'),
    should = chai.should(),
    server = require('../../server/index'),
    Student = mongoose.model('Student'),
    Instructor = mongoose.model('Instructor'),
    Course = mongoose.model('Course');

chai.use(chaiHttp);

describe('Students', function () {

    let course = new Course({term: 'Summer', year: 2017, number: 'EE16A', instructors: [], code: 'ABCDEF'});

    Student.collection.drop();
    Instructor.collection.drop();
    Course.collection.drop();

    before(function (done) {
        new Instructor({name: 'Foo', email: 'foobar@berkeley.edu', password: 'bar'}).save(function (error, instructor) {
            if (!error) {
                course.instructors.push(instructor.id);
                course.save(function (error, data) {
                    if (!error) {
                        course = data;
                        done();
                    } else {
                        console.log(error);
                        done();
                    }
                });
            } else {
                console.log(error);
                done();
            }
        });
    });

    after(function (done) {
        Instructor.collection.drop();
        Course.collection.drop();
        done();
    });

    afterEach(function (done) {
        Student.collection.drop();
        done();
    });

    describe('POST /api/student/login', function () {
        it('should login the student', function (done) {
            chai.request(server)
                .post('/api/student/login')
                .send({sid: '123', username: 'foobar'})
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.body.should.have.property('message', 'Login success');
                    response.body.should.have.property('sid', '123');
                    response.body.should.have.property('username', 'foobar');
                    done();
                });
        });
    });

    describe('POST /api/student', function () {
        it('should not create a student without a course', function (done) {
            chai.request(server)
                .post('/api/student')
                .send({sid: 123})
                .end(function (error, response) {
                    response.should.have.status(400);
                    done();
                });
        });
        it('should create a student', function (done) {
            chai.request(server)
                .post('/api/student')
                .send({sid: 123, course: course.code})
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.body.should.have.property('sid', '123');
                    response.body.should.have.property('courses');
                    response.body.courses.should.be.an('array').that.has.lengthOf(1);
                    response.body.courses.should.include(course.id);
                    done();
                });
        });
    });

});
