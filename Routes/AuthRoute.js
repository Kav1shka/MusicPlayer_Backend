const express=require("express");
const router = express.Router();

const {register,login,loginWith_spotify}=require("../Controllers/AuthController.js");

router.post("/register",register);
router.post("/login", login);
router.post("/loginWithSpotify",loginWith_spotify)
module.exports= router;