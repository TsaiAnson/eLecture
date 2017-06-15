const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    courses: {type: [Schema.Types.ObjectId]}
});

module.exports = mongoose.model('Instructor', InstructorSchema);
