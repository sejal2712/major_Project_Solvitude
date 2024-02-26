const mongoose = require("mongoose")

const stackSchema = new mongoose.Schema({
  name: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user who owns the stack
})

const Stack = mongoose.model("Stack", stackSchema)

module.exports = Stack
