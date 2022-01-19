const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  created_by: { type: String, required: true },
  blog_content: { type: String, required: true },
  created_at: { type: String, required: true },
});

const fruit = mongoose.model("Blog", blogSchema);

module.exports = blog;
