const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");

const validateRegisterInput = require("../Validation/register");
// const validateLoginInput = require("../Validation/login");

const AuthController = {
  register: async (req, res) => {
    try {
      const Email = req.body.Email;
      const password = req.body.password;
      const password2 = req.body.password2;
      console.log("came here 1");
      const errorMessage = validateRegisterInput(Email, password, password2);
      console.log("came here 2");
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const userExists = await User.findOne({ Email });

      if (userExists) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }

      const hashpassword = await bcrypt.hash(password, 10);

      await new User({
        Email,
        password: hashpassword,
        password2,
      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = AuthController;
