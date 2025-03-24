require("dotenv").config();
const express = require("express");
const connectToDb = require("./config/mongo.config");
const cors = require("cors");
const loanRoute = require("./routes/loan.routes");
const PORT = Number(process.env.PORT_NUMBER) || 8081;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/loan", loanRoute);

app.use("/", (req, res) => {
  res.send("This is test route");
});

app.listen(PORT, async () => {
  try {
    connectToDb();
    console.log(`Connected to server ${PORT}`);
  } catch {
    console.log(`Failed connecting to server ${PORT} `);
  }
});
