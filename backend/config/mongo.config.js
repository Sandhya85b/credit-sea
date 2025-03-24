const mongoose = require("mongoose");
require("dotenv").config();
const connectToDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to db");
  } catch {
    console.log("Failed connecting to db");
  }
};

module.exports = connectToDb;
