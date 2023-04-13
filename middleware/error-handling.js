
import { StatusCodes } from "http-status-codes";

 const errorHandling=(err,req,res,next)=>{
  const defaultError={
    statusCodes:StatusCodes.INTERNAL_SERVER_ERROR,
    msg:"Something was Wrong",
  }
  if(err.name==='ValidationError'){
    defaultError.statusCodes=StatusCodes.BAD_REQUEST
    defaultError.msg=Object.values(err.errors).map((item)=>item.message).join(',');
  }
  res.status(defaultError.statusCodes).json({message:defaultError.msg});
}
export {errorHandling};