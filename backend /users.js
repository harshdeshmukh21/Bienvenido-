const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  conpassword: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", UserSchema, "signup");
module.exports = Users;
