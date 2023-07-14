const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "text is required"],
    },
    businessName: {
      type: String,
      required: [true, "URL is required"],
    },
    description: {
      type: String,
      required: [true, "number is required"],
    },
    likes: {
      type: Number,
      required: [false],
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
