const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const LectureSchema = new Schema({
    /**
     * @property {Date} time
     */
    time: {type: Date, required: true},
    /**
     * @property {[Schema.Types.ObjectId]} messages
     */
    messages: {type: [Schema.Types.ObjectId], required: true}
});

module.exports = mongoose.model('Lecture', LectureSchema);
