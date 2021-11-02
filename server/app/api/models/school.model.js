const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    characters: [{ type: Schema.Types.ObjectId, ref: "character", required: true }]
});

const School = mongoose.model("school", SchoolSchema);
module.exports = School;