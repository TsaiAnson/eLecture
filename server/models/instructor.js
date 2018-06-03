const mongoose = require("mongoose"),
    bcrypt = require("bcrypt-nodejs"),
    Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    courses: { type: [Schema.Types.ObjectId] },
});

InstructorSchema.statics = {
    encryptPassword: function (password, callback) {
        bcrypt.genSalt(10, function (error, salt) {
            if (!error) {
                bcrypt.hash(password, salt, null, function (error, hash) {
                    return callback(error, hash);
                });
            } else {
                return callback(error);
            }
        });
    },
    comparePassword: function (password, instructorPassword, callback) {
        bcrypt.compare(password, instructorPassword, function (error, match) {
            if (!error) {
                return callback(null, match);
            } else {
                return callback(error);
            }
        });
    }
};

module.exports = mongoose.model("Instructor", InstructorSchema);
