const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    Student = mongoose.model('Student'),
    Instructor = mongoose.model('Instructor');

module.exports = function (passport) {
    passport.use('student', new LocalStrategy(
        function (sid, done) {
            Student.findOne({sid: sid}, function (error, student) {
                if (error) {
                    return done(error);
                }
                if (!student) {
                    return done(null, false, {message: 'Invalid student ID.'});
                }
                return done(null, student);
            });
        }
    ));

    passport.use('instructor', new LocalStrategy(
        function (email, password, done) {
            Instructor.findOne({email: email}, function (err, instructor) {
                if (err) {
                    return done(err);
                }
                if (!instructor) {
                    return done(null, false, {message: 'Invalid email.'});
                }
                if (!instructor.comparePassword(password)) {
                    return done(null, false, {message: 'Incorrect password.'});
                }
                return done(null, instructor);
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
