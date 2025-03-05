const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./database/db");
const router = require("./routes/auth-route");
const protectedRouter = require("./routes/protected-route");
connectDB();

app.use(express.json());

app.use("/v1/auth/", router);
app.use("/v1/protected/", protectedRouter);

app
  .listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })
  .on("error", (error) => {
    console.log(`Error occurred: ${error.message}`);
    process.exit(1);
  });
