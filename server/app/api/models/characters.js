const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
    {
        name: { type: String, require: true },
        house: { type: String, require: true },
        dateOfBirth: { type: String},
        patronus: { type: String},
        image:{ type:String, require:true},
    },
    { timestamps: true }
);

const Character = mongoose.model("character", CharacterSchema);
module.exports = Character;