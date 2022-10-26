const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must provide a name!"],
    trim: true,
    maxlength: [20, "Name must be less tha 20 chatacters"],
  },
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
