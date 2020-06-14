"use strict";

const mongoose = require("mongoose");
// definir nuevos schemas
var Schema = mongoose.Schema;

var UserSchema = Schema({
  name: String,
  surname: String,
  nick: String,
  email: String,
  password: String,
  role: String,
  image: String,
  description:String
});

module.exports = mongoose.model("User", UserSchema);