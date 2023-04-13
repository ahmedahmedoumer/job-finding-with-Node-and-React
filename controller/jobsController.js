const createJob=(req,res)=>{
  res.send("create Job");
}
const updateJob=(req,res)=>{
 res.send("update Job");
}
const DeleteJob = async(req,res)=>{
 res.send("Delete Job")
}
const checkStatus = async(req,res)=>{
  res.send("check Status")
 }
 const getJob = async(req,res)=>{
  res.send("get Job")
 }
export {createJob,updateJob,DeleteJob,checkStatus,getJob}