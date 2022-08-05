const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, requiered: true },
  year: { type: Number, unique: true, required: true },
  country: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("companies", schema);
