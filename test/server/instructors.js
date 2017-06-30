'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../../server/index'),
    should = chai.should();

chai.use(chaiHttp);

describe('Instructors', function () {
    describe('POST /api/instructor/login', function () {
        it('should login the instructor', function (done) {
            chai.request(server)
                .post('/api/instructor/login')
                .send({email: 'foobar@berkeley.edu', password: 'foobar'})
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.body.should.have.property('message', 'Login success');
                    response.body.should.have.property('email', 'foobar@berkeley.edu');
                    response.body.should.have.property('password', 'foobar');
                    done();
                });
        });
    });
});
