const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// const users =require("./Routes/AuthRoute");

// const passport = require("passport");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 8000;
app.use(cors());

app.use(bodyParser.json());

const url =
  "mongodb+srv://Kav1shka:Kavishka123@musicplayer.gow9s1m.mongodb.net/test";

mongoose.connect(url, (err) => {
  if (err) throw err;
  console.log("MongoDB is connected...");
});

const AauthenticationRouter = require("./Routes/AuthRoute");
app.use("/customer", AauthenticationRouter);

// app.use("/users", users)

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
