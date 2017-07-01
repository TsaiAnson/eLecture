const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CourseSchema = new Schema({
    term: {type: String, required: true},
    year: {type: Number, required: true},
    number: {type: String, required: true},
    name: {type: String},
    instructors: {type: [Schema.Types.ObjectId], required: true},
    code: {type: String, required: true, unique: true},
    lectures: {type: [Schema.Types.ObjectId]}
});

module.exports = mongoose.model('Course', CourseSchema);
