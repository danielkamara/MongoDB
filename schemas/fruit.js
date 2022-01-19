// Step 1: import Modules

const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  deLicious: Boolean,
  poisonous: Boolean,
});

const fruit = mongoose.model("Fruit", fruitSchema);

module.exports = fruit;
