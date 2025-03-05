const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (token == null) return res.sendStatus(401); // No token present

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token

    req.user = user;
    next();
  });
};

router.get("/home", authenticateToken, (req, res) => {
  res.send("This is a protected route for authenticated users");
});

module.exports = router;
