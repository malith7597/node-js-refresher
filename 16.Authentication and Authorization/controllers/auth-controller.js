const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const registerASingleUser = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username: username,
      password: hashedPassword,
      email: email,
      role: role || "user"
    });
    const newUser = await user.save();
    res.status(201).json({
      message: "User registered successfully",
      data: newUser
    });
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign(
      { username: user.username, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registerASingleUser, loginUser };
