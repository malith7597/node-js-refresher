const express = require("express");
const router = express.Router();
const {
  registerASingleUser,
  loginUser
} = require("../controllers/auth-controller");

router.post("/register", registerASingleUser);
router.post("/login", loginUser);

module.exports = router;
