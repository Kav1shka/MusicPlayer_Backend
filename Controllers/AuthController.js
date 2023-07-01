const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");


const { registerValid ,loginValid} = require("../Validation/register");
// const validateLoginInput = require("../Validation/login");

const AuthController = {
  register: async (req, res) => {
    try { 
      const email = req.body.email;
      const password = req.body.password;
      const password2 = req.body.password2;
   
     const errorMessage= registerValid({
        email,
        password,
        password2,
      });
      
      // if (errorMessage) return res.status(400).json({ message: errorMessage });

      const userExists = await User.findOne({ email });
    
      if (userExists) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }
   
      const hashpassword = await bcrypt.hash(password, 10);

      await new User({
        email,
        password: hashpassword,
        password2,
      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      // console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

login:async(req,res)=>{
try {
  const email=req.body.email;
  const password=req.body.password;
  const errorMessage= loginValid({
    email,
    password,
  });
  // if (errorMessage) return res.status(400).json({ message: errorMessage });

  const user=await User.findOne({email});
  const details = await User.findOne(user);
  if(!user){
    return res.status(400).json({message:"Not registered email"});
  }
  const match = await bcrypt.compare(password, user.password);
if(!match){
  return res.status(400).json({message:"Invalid email or password"});
}

const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
  expiresIn: "7d",
});

res
.status(200)
.json({
  message: "You have successfully logged in",
  User,
  token,
  details,
});
} catch (error) {
  console.log(error);
  res.status(500).json({ message: error.message });
}
  },

loginWith_spotify:async(req,res)=>{
  // app.get('/callback', function(req, res) {

    // var code = req.query.code || null;
    // var state = req.query.state || null;
  
    // if (state === null) {
    //   res.redirect('/#' +
    //     querystring.stringify({
    //       error: 'state_mismatch'
    //     }));
    // } else {
    //   var authOptions = {
    //     url: 'https://accounts.spotify.com/api/token',
    //     form: {
    //       code: code,
    //       redirect_uri: redirect_uri,
    //       grant_type: 'authorization_code'
    //     },
    //     headers: {
    //       'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    //     },
    //     json: true
    //   };
    // }
  // });
var client_id = '6e34774d68364a58ad133dc66586c6ef';
var redirect_uri = 'http://localhost:8000/callback';


// app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
// });


}


};

module.exports = AuthController;
