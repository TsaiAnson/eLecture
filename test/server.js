'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect,
    server = require('../server/index');

chai.use(chaiHttp);

describe('Server', function () {
    describe('GET api/foobar', function () {
        it('should return 404 not found', function (done) {
            chai.request(server)
                .get('/api/foobar')
                .end(function (error, response) {
                    expect(response).to.be.json;
                    expect(response).to.have.status(404);
                    // expect(response).to.have.param('messsage', 'Not Found');
                    // expect(response).to.have.param('uri', 'foobar');
                    done();
                });
        });
    });
});