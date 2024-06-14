  const express = require("express");
  const path = require("path");
  const cors = require("cors");
  const mongoose = require("mongoose");
  const Users = require("./models/users");
  const userRoutes = require("./routes/userRoutes");

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

  app.use("/user", userRoutes);

  app.get("/addfriends", (req, res) => {
    Users.find({}).then((users) => res.json(users));
  });

  app.get("/", (req, res) => {
    res.json("harshdeshmukh21");
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
