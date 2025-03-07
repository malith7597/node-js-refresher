const e = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
