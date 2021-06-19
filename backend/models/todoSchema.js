const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({
  id: mongoose.ObjectId,
  text: String,
  completed: Boolean,
  userId: String,
});

module.exports.todoSchema = mongoose.model('todos', dbSchema);
