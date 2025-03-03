const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const DB = require("./database/db");
const bookRoute = require("./routes/book-route");

app
  .listen(PORT, () => {
    console.log("Server is running on port 3000");
  })
  .on("error", (err) => {
    console.log("Error: ", err);
  });

app.use(express.json());
app.use("/api/v1/books/", bookRoute);

DB.connectMongoDB();
