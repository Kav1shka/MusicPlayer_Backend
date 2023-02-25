const Validator = require("validator");
const isEmpty=require("../is-Empty");
module.exports = function validateRegisterInput(data) {

let errors={};
console.log("came here @");
data.Email=!isEmpty(data.Email)? data.Email:'';
console.log("came here #");
data.password = !isEmpty(data.password) ? data.password :'';
data.password2 = !isEmpty(data.password2) ?  data.password2 :'';

console.log("came here 3");
if(Validator.isEmpty(data.Email)){
    errors.Email="Email field is required!!";
}
if(Validator.isEmail(data.Email)){
  errors.Email="This is not valid Email!!";
}
console.log("came here 4");
if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  console.log("came here 5");
  return {
    errors,
    isValid: isEmpty(errors)
  
  };
};