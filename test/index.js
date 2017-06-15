'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect,
    server = require('../server/index');

chai.use(chaiHttp);

describe('Index', function () {
    describe('GET /', function () {
        it('should return index page', function (done) {
            chai.request(server)
                .get('/')
                .end(function (error, response) {
                    done();
                });
        });
    });
});
