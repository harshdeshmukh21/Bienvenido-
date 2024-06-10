const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

app.get("/addfriends", (req, res) => {
  res.json("harshdeshmukh21");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
