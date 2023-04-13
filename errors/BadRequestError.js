import customApiError from "./customApiError.js";
import { StatusCodes } from "http-status-codes";
class BadRequestError extends customApiError{
  constructor(message){
  super(message)
  this.statuscode=StatusCodes.BAD_REQUEST
  }
}
export default BadRequestError;