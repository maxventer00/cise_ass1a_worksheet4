const mongoose = require("mongoose");

const SEPracticesSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  practice: {
    type: String,
    required: true,
  },
});

module.exports = SEPractices = mongoose.model("sepractices", SEPracticesSchema);
