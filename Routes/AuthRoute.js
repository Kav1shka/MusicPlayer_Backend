const express=require("express");
const router = express.Router();

const {register}=require("../Controllers/AuthController.js");

router.post("/register",register);

module.exports= router;