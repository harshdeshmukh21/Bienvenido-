const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

app.get("/addfriends", (req, res) => {
  res.json("harshdeshmukh21");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
