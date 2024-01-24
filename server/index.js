const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
// middleware
app.use(cors());
app.use(bodyParser.json());

// console.log(object);

// Mongodb connection
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}
@proppioneers.pzy67in.mongodb.net/Event-Planet`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Eroor handler

// _________________________________________________
// incorrect url error
app.use((req, res, next) => {
  res.status(404).send("Requested url was not found");
});
// developer code error handler (customized)
app.use((err, req, res, next) => {
  try {
    res.status(500).send("There is error in your code ");
  } catch (error) {
    res.status(500).send("server error", err.message);
  }
});
// _________________________________________

app.listen(port, () => {
  console.log(` Event Planet Server is running on port: ${port}`);
});
