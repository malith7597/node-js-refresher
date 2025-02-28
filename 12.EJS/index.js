const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
