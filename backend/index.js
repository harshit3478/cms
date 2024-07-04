const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5555;
app.use(cors());

app.use('/' , require('./apis/router'))
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Server");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Successful database connection");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

