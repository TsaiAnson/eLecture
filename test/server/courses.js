"use strict";

const chai = require("chai"),
    chaiHttp = require("chai-http"),
    mongoose = require("mongoose"),
    should = chai.should(),
    server = require("../../server/index"),
    Course = require("../../server/models/course"),
    Instructor = require("../../server/models/instructor");

chai.use(chaiHttp);

describe("Courses", function () {

    let instructor = new Instructor({name: "Foo", email: "foobar@berkeley.edu", password: "bar"});

    Instructor.collection.drop();
    Course.collection.drop();

    before(function (done) {
        instructor.save(function (error, data) {
            if (!error) {
                instructor = data;
                done();
            } else {
                console.log(error);
                done();
            }
        });
    });

    after(function (done) {
        Instructor.collection.drop();
        done();
    });

    afterEach(function (done) {
        Course.collection.drop();
        done();
    });

    describe("POST /api/course", function () {
        it("should create a course", function (done) {
            chai.request(server)
                .post("/api/course")
                .send({term: "Summer", year: 2017, number: "EE16A", name: "foobar", instructors: [instructor._id]})
                .end(function (error, response) {
                    response.should.have.status(200);
                    response.body.should.have.property("term", "Summer");
                    response.body.should.have.property("year", 2017);
                    response.body.should.have.property("number", "EE16A");
                    response.body.should.have.property("name", "foobar");
                    response.body.should.have.property("instructors");
                    response.body.instructors.should.be.an("array").that.has.lengthOf(1);
                    response.body.instructors.should.include(instructor.id);
                    response.body.should.have.property("code").that.has.lengthOf(6);
                    done();
                });
        });
    });

});
