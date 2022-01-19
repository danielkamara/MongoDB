const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../schemas/user");
const jwt = require("../middleware/jwt");
let salt = this.process.env.SALT

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Users Up" });
});

userRouter.post("/register", (req, res) => {
  res.status(200).json({ message: "Users Registered" });
});

userRouter.post("/login", async (req, res) => {
    Let username = req.body.username
    Let password = req.body.password
    Let salt = Number()

    User.findOne({ username: username}, (err, retUser) => {
        if(err) {
            res.status(404).json({message: err.message})
        }
        bcrypt.compare(password, retUser.password, (err, result) => {
             if(err) {
            res.status(400).json({message: err.message})
        }

        if(result === false) {
            res.status(403).json({message: "You need to be logged in"})
        }

        Let token = jwt.generateAccessToken(retUser.username)
        res.setHeader("Auth", token)
        res.status(200).json({message: retUser})
        })

    })
 
});

module.exports = userRouter;
