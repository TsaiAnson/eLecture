const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CourseSchema = new Schema({
    /**
     * @property {String} term
     */
    term: {type: String, required: true},
    /**
     * @property {String} title
     */
    title: {type: String},
    /**
     * @property {[Schema.Types.ObjectId]} instructors
     */
    instructors: {type: [Schema.Types.ObjectId], required: true},
    /**
     * @property {String} code
     */
    code: {type: String, required: true},
    /**
     * @property {[Schema.Types.ObjectId]} lectures
     */
    lectures: {type: [Schema.Types.ObjectId]}
});

module.exports = mongoose.model('Course', CourseSchema);
