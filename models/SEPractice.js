const mongoose = require("mongoose");

const SEPracticeSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  practice: {
    type: String,
    required: true,
  },
});

module.exports = SEPractice = mongoose.model("sepractice", SEPracticeSchema);
