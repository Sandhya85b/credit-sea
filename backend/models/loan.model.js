const mongoose = require("mongoose");
const loanSchema = new mongoose.Schema(
  {
    fullName: String,
    loanAmount: Number,
    loanTenure: Number,
    employmentStatus: String,
    reason: String,
    employmentAddress: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Loan", loanSchema);
