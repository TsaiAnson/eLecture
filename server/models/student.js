const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const StudentSchema = new Schema({
    /**
     * @property {String} sid
     */
    sid: {type: String, required: true, unique: true},
    /**
     * @property {String} username
     */
    username: {type: String, required: true},
    /**
     * @property {[Schema.Types.ObjectId]} courses
     */
    courses: {type: [Schema.Types.ObjectId]}
});

module.exports = mongoose.model('Student', StudentSchema);
