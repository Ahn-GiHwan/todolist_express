const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  value: String,
  isCheck: Boolean,
});

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
