const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const spotify=require("./spotify")

// const users =require("./Routes/AuthRoute");
// const passport = require("passport");

//credentials
// const SpotifyWebApi = require('spotify-web-api-node')
// const spotifyApi = new SpotifyWebApi({
//   clientId: '6e34774d68364a58ad133dc66586c6ef',
//   clientSecret: '079010703d394394911bc2af8f48698f',
//   redirectUri:'http://localhost:8000/callback'
// })

// spotifyApi.clientCredentialsGrant()
//   .then(data => {
//     const access_token=data.body.access_token['access_token'];
//     console.log('Access token retrieved')
//     spotifyApi.setAccessToken(access_token);
//     console.log(access_token);
//  })
//   .catch(error => {
//     console.log('Error retrieving access token:', error)
//   })


const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 8001;
app.use(cors());

app.use(bodyParser.json());

const url ="mongodb+srv://Kav1shka:Kavishka123@musicplayer.gow9s1m.mongodb.net/test";

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
