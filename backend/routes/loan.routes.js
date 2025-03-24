const express = require("express");
const loanModel = require("../models/loan.model");
const loanRoute = express.Router();

loanRoute.post("/apply", async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    const existingLoan = await loanModel.findOne({ fullName: req.body.fullName });
    if (existingLoan) {
      return res.status(403).json({ msg: "Already applied " });
    }
    
    const newLoan = await loanModel.create(req.body);
    res.status(201).json({msg:"Successfully applied for loan"})  
} catch {
    res.status(500).json({ msg: "Failed to apply loan" });
  }
});

loanRoute.get("/appliedList", async (req, res) => {
  try {
    const appliedlist = await loanModel.find();
    res.status(200).json(appliedlist)
  } catch {
    res.status(500).json({ msg: "Failed to apply loan" });
  }
});
module.exports = loanRoute;
