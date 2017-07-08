const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    Student = mongoose.model('Student'),
    Instructor = mongoose.model('Instructor');

module.exports = function (passport) {
    passport.use('student', new LocalStrategy(
        {
            usernameField: 'sid',
            passwordField: 'sid'
        },
        function (sid, password, done) {
            Student.findOne({sid: sid}, function (error, student) {
                if (!error) {
                    if (!student) {
                        return done(null, false, {message: 'Invalid student ID.'});
                    }
                    return done(null, student);
                } else {
                    return done(error);
                }
            });
        }
    ));

    passport.use('instructor', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        function (email, password, done) {
            Instructor.findOne({email: email}, function (error, instructor) {
                if (!error) {
                    if (!instructor) {
                        return done(null, false, {message: 'Invalid email.'});
                    }
                    Instructor.comparePassword(password, instructor.password, function (error, match) {
                        if (!error) {
                            if (!match) {
                                return done(null, false, {message: 'Incorrect password.'});
                            } else {
                                return done(null, instructor);
                            }
                        } else {
                            return done(error);
                        }
                    })
                } else {
                    return done(error);
                }
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        Student.findById(id, function (error, student) {
            if (!error) {
                if (!student) {
                    Instructor.findById(id, function (error, instructor) {
                        if (!error) {
                            done(null, instructor);
                        } else {
                            done(error);
                        }
                    });
                } else {
                    done(null, student);
                }
            } else{
                done(error);
            }
        });
    });
};
