const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: mongoose.ObjectId,
  email: String,
  password: String,
});

module.exports.userSchema = mongoose.model('users', UserSchema);
