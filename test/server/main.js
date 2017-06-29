'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../../server/index'),
    should = chai.should();

chai.use(chaiHttp);

describe('Main', function () {
    describe('GET /api/foobar', function () {
        it('should return 404 not found', function (done) {
            chai.request(server)
                .get('/api/foobar')
                .end(function (error, response) {
                    response.should.have.status(404);
                    response.body.should.have.property('message', 'Not Found');
                    response.body.should.have.property('uri', 'foobar');
                    done();
                });
        });
    });
});
