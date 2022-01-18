//STEP ONE -> require Mongoose
const mongoose = require("mongoose");

//STEP TWO -> Create main function
async function main() {
  //STEP THREE -> Connect!
  // mongoose.action (URI, options)
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewURLParser: true,
  });
  // Purpose: Let us know that our mongoDB is
  // connected to the app
  //STEP FOUR -> Log Connection Successful
  await mongoose.connection.once("open", () => {
    console.log("Connected");
  });
}

// STEP FIVE -> Export Connection
module.exports = main;
