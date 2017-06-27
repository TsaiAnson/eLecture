'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server/index'),
    should = chai.should();

chai.use(chaiHttp);

describe('Index', function () {
    describe('GET /', function () {
        it('should return index page', function (done) {
            chai.request(server)
                .get('/')
                .end(function (error, response) {
                    response.should.have.status(200);
                    done();
                });
        });
    });
});
