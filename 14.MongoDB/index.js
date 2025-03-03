const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mtkavindamob:HO6qxup8PTFjgPNy@cluster0.7tc7z.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
async function createUserQueries() {
  try {
    const newUser = await new User.create({
      name: "Kavinda",
      email: "",
      age: 25,
      isActive: true,
      tags: ["Developer", "Backend"]
    });

    console.log("New User:", newUser);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}
