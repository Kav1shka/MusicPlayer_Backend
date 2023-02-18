const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const users =require("./routes/users.js");
const passport = require("passport");

const url ="mongodb+srv://Kav1shka:Kavishka123@musicplayer.gow9s1m.mongodb.net/test";

mongoose.connect(url,
    err => {
        if(err) throw err;
        console.log('MongoDB is connected...')
    });