const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  created_by: { type: String, required: true },
  blog_content: { type: String, required: true },
  created_at: { type: String, required: true },
});

const blog = mongoose.model("Blog", blogSchema);

module.exports = blog;
