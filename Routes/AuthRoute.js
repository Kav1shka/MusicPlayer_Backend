const express=require("express");
const router = express.Router();

const {register,login}=("../Controllers/AuthController.js");

module.exports= router;