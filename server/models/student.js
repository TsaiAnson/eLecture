const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const StudentSchema = new Schema({
    sid: { type: String, required: true, unique: true },
    courses: { type: [Schema.Types.ObjectId] },
});

module.exports = mongoose.model("Student", StudentSchema);
