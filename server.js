// STEP SEVEN -> CONNECT TO MONGO
const mongoConnection = require("./config");
const express = require("express");

const userRoute = require("./routes/userRoute");

const fruitRoute = require("./routes/fruitRoute");

const bodyParser = require("body-parser");
//CONFIGURE DOTENV
const dotenv = require("dotenv");
const helmet = require("helmet");
dotenv.config();
const port = 3000 || process.env.PORT;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/fruit", fruitRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "API UP!" });
});

app.listen(port, () => {
  //Anything that needs to boot - goes here!
  // STEP EIGHT -> Run mongoConnection
  mongoConnection();
  console.log("Hello, what's up?");
});
