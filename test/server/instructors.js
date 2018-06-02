"use strict";

const chai = require("chai"),
    chaiHttp = require("chai-http"),
    mongoose = require("mongoose"),
    should = chai.should(),
    server = require("../../server/index"),
    Instructor = require("../../server/models/instructor");

chai.use(chaiHttp);

describe("Instructors", function () {

    Instructor.collection.drop();

    afterEach(function (done) {
        Instructor.collection.drop();
        done();
    });

    describe("POST /api/instructor/login", function () {
        it("should login the instructor", function (done) {
            chai.request(server)
                .post("/api/instructor/login")
                .send({email: "foobar@berkeley.edu", password: "foobar"})
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.body.should.have.property("message", "Login success");
                    response.body.should.have.property("email", "foobar@berkeley.edu");
                    response.body.should.have.property("password", "foobar");
                    done();
                });
        });
    });

    describe("POST /api/instructor", function () {
        it("should create an instructor", function (done) {
            chai.request(server)
                .post("/api/instructor")
                .send({name: "Foo", email: "foobar@berkeley.edu", password: "bar"})
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.body.should.have.property("name", "Foo");
                    response.body.should.have.property("email", "foobar@berkeley.edu");
                    response.body.should.have.property("password").that.is.not.equal("bar");
                    response.body.should.have.property("courses");
                    done();
                });
        });
    });

});
