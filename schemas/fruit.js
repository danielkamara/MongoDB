// Step 1: import Modules

const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  deLicious: Boolean,
  poisonous: Boolean,
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const fruit = mongoose.model("Fruit", fruitSchema);

module.exports = fruit;
