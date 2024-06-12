const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const Users = require("./users");

const app = express();
const port = 4000;

const uri =
  "mongodb+srv://harshdeshmukh21:3gZG4Oze8Ig45eNc@harsh.wu5d5bs.mongodb.net/bienvenido?retryWrites=true&w=majority&appName=Harsh";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(cors());

app.use(express.json());

app.post("/addUsers", (req, res) => {
  const { username, email, password, conpassword } = req.body;

  if (!username || !email || !password || !conpassword) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }

  const newUser = new Users({ username, email, password, conpassword });

  newUser
    .save()
    .then(() => {
      console.log("User added");
      res.status(200).json({ message: "User added" });
    })
    .catch((err) => {
      console.error("Error adding user: ", err);
      res.status(500).json({ error: "Error adding user" });
    });
});

app.get("/addfriends", (req, res) => {
  Users.find({}).then((users) => res.json(users));
});

app.get("/", (req, res) => {
  res.json("harshdeshmukh21");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
