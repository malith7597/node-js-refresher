const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

/* try {
    const book = new BookDB({
      title: req.body.title,
      year: req.body.year
    });
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
  } */

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

module.exports = { registerASingleUser };
