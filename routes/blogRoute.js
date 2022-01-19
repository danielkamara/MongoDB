const express = require("express");
const jwt = require("../middleware/jwt");
const Blog = require("../schemas/blog");

const blogRoute = express.Router();

blogRoute.get('./:username', jwt.authenticateToken, (req, res) => {

})

blogRoute.post("./:username", jwt.authenticateToken, (req, res) => {
    Let username = req.params.username
    Let blogPost = req.blogPost = req.body
    blogPost.created_by = username
    blogPost.created_at = Date.now()

    Blog.create(blogPost, (err, blog) => {
        if(err) {
            res.status(400).json({ message: err.message})
        }
         res.status(400).json({ message: blog})
        })
    })

    
});








blogRoute.delete("/id", jwt.authenticateToken, (req, res) => {});
