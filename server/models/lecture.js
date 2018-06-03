const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const LectureSchema = new Schema({
    time: { type: Date, required: true },
    messages: { type: [Schema.Types.ObjectId], required: true },
});

module.exports = mongoose.model("Lecture", LectureSchema);
