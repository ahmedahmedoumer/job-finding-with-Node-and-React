const register=async(req,res)=>{
  res.send("register user")
}
const updateUser=async(req,res)=>{
 res.send("update user")
}
const login=async(req,res)=>{
 res.send("login user")
}
export  {register,login,updateUser}