const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    /**
     * @property {String} email
     */
    email: {type: String, required: true},
    /**
     * @property {String} password
     */
    password: {type: String, required: true},
    /**
     * @property {[Schema.Types.ObjectId]} courses
     */
    courses: {type: [Schema.Types.ObjectId]}
});

module.exports = mongoose.model('Instructor', InstructorSchema);
