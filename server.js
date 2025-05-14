const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from "quiz" folder (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "quiz")));

// Connect to MongoDB
// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/quizApp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB ✅ ");
});

// Define User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  score: { type: Number, default: 0 },
  quizzesAttended: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "Username already taken." });
    }

    const newUser = new User({ username, password, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed." });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    res.status(200).json({
      username: user.username,
      role: user.role,
      score: user.score,
      quizzesAttended: user.quizzesAttended,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed." });
  }
});

// ✅ Update score and quizzesAttended Route
app.post('/update-score', async (req, res) => {
  const { username, score } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("User not found");

    // Update score and quiz count
    user.score = (user.score || 0) + score;
    user.quizzesAttended = (user.quizzesAttended || 0) + 1;

    await user.save();
    res.json(user); // Send back updated user
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating user");
  }
});

// Serve index.html at root
app.use(express.static(path.join(__dirname, "..", "quiz")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "quiz", "index.html"));
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✈️Server is running on http://localhost:${PORT}`);
});
