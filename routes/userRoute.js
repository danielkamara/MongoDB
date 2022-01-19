const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Users Up" });
});

userRouter.post("/register", (req, res) => {
  res.status(200).json({ message: "Users Registered" });
});

userRouter.post("/login", (req, res) => {
  res.status(200).json({ message: "Users logged" });
});

module.exports = userRouter;
