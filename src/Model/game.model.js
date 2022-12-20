const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playername:{type: String, required: true},
  difficulty: { type: String, required: true },
});

const Playermodel = mongoose.model("job", playerSchema);

module.exports = Playermodel;