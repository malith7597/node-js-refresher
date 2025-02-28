const express = require("express");
const app = express();
const PORT = 3000;

/* app.get("/", (req, res) => {
  res.send("Hello World");
}); */

app.get(
  "/users/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === "0") next("route");
    // otherwise pass the control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // send a regular response
    res.send("regular");
  }
);

// handler for the /user/:id path, which sends a special response
app.get("/users/:id", (req, res, next) => {
  res.send("special");
});

/* app.use(
  "/",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Type:", req.method);
    next();
  },
  (req, res) => {
    res.send("Hello World");
  }
); */

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
