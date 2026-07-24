const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
