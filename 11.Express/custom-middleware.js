const express = require("express");
const app = express();

const PORT = 3000;
const firstMiddleware = (req, res, next) => {
  console.log("This is the first middleware");
  next();
};

app.use(firstMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
