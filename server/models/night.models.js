const mongoose = require("mongoose");

const NightSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "text is required"],
      minlength: [3, "Night name needs to be 3+ characters."],
    },
    lastname: {
      type: String,
      required: [true, "URL is required"],
    },
    interest: {
      type: String,
      required: [true, "number is required"],
    },
  },
  { timestamps: true }
);

const Night = mongoose.model("Night", NightSchema);

module.exports = Night;
