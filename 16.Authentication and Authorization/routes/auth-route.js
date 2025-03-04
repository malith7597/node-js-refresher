const express = require("express");
const router = express.Router();
const { registerASingleUser } = require("../controllers/auth-controller");

router.post("/register", registerASingleUser);

module.exports = router;
