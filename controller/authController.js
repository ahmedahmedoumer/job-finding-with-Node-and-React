import User from '../models/User.js' 
import validator from 'express-validator'
import LoginValidation from '../validation/LoginValidation.js'
const {check,validationresult}=validator
const register = async(req,res,next)=>{
try {
  const create=await User.create(req.body)
  res.status(201).send("successefully registerd user").json({create})
} catch (error) {
 next(error);
}
}
const updateUser = async(req,res)=>{
  res.send("update user")
}
const login = async(req,res)=>{
LoginValidation;
const {error}=validationresult(req);
if(!error.isEmpty()){
  res.status(401).json({error:error.array()});
}
  return res.status(200).json({ message: 'Logged in successfully' });
}
export {register,login,updateUser}