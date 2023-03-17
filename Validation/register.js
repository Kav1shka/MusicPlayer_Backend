
const registerValid = (email, password,password2)=>{
  
  if (!email) return "Please enter your email address";
  // if (!validateEmail(email)) return "Please enter valid email";
  if (!password) return "Please enter new password";
  if (password.length < 10)
    return "Password should contain atleast 10 characters";
  if (!password2) return "Please retype your password to confirm";
  if (password !==password2)
    return "Passwords does not match. Please try again";
};


  const loginValid = (Email, password) =>{
    if (!Email) return "Please enter your email";
    if (!password) return "Please enter your password";
  };
 
  
  // function validateEmail(email) {
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }
  
  module.exports =  {
    registerValid,
     loginValid,

  };





// const Validator = require("validator");
// // const isEmpty=require("../is-Empty");
// const isEmpty = require("is-empty");

// module.exports = function validateRegisterInput(data) {
//   let errors = {};
//   data.email = !isEmpty(data.email) ? data.email : "";
//   data.password = !isEmpty(data.password) ? data.password : "";
//   data.password2 = !isEmpty(data.password2) ? data.password2 : "";

//   if (Validator.isEmpty(data.email)){
//     errors.email = "Email field is required";
//   } else if (!Validator.isEmail(data.email)) {
//     errors.email = "Email is invalid";
//   }

//   if (Validator.isEmpty(data.password)) {
//     errors.password = " password field is required";
//   }

//   if (Validator.isEmpty(data.password2)) {
//     errors.password2 = "Confirm password field is required";
//   }

//   if (Validator.isLength(data.password, { min: 6, max: 30 })){
//     errors.password = "Password must be at least 6 characters";
//   }
//   if (Validator.equals(data.password, data.password2)) {
//     errors.password2 = "Passwords must match";
//   }
//   return {
//     errors,
//     isValid: isEmpty(errors),
//   };
// };
