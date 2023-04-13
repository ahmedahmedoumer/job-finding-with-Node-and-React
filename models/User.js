import mongoose from "mongoose";
import validator from "validator";
const User=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"please fill the name filled"],
    minlength:4,
    maxlength:20,
    trim:true,
  },
  email:{
    type:String,
    required:[true,"the email field can not be null"],
    validate:{
      validator:validator.isEmail,
      message:"fill valid email please",
    },
    unique:true,
  },
  password:{
    type:String,
    required:[true,"the password field can not be null"],
    minlength:4,
    maxlength:30,

  },

});
export default mongoose.model('user',User);