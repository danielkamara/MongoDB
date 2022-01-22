const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../schemas/user");
const jwt = require("../middleware/jwt");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Users Up" });
});

userRouter.post("/register", async (req, res) => {
  let user = req.body;
  let password = req.body.password;
  let salt = Number(process.env.SALT);
  let hashedPassword = await bcrypt.hash(password, salt);
  user.password = hashedPassword;

  User.create(user, (err, newUser) => {
    if (err) {
      res.status(404).json({ message: err.message });
    }
    res.status(200).json({ user: newUser });
  });
});

userRouter.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({ username: username }, (err, retUser) => {
    if (err) {
      res.status(404).json({ message: err.message });
    }
    bcrypt.compare(password, retUser.password, (err, result) => {
      if (err) {
        res.status(400).json({ message: err.message });
      }

      if (result === false) {
        res.status(403).json({ message: "You need to be logged in" });
      }

      let token = jwt.generateAccessToken(retUser.username);
      res.setHeader("Auth", token);
      res.status(200).json({ message: retUser });
    });
  });
});

module.exports = userRouter;
