import customApiError from "./customApiError.js";
import { StatusCodes } from "http-status-codes";
class notFoundError extends customApiError{
  constructor(message){
  super(message)
  this.statuscode=StatusCodes.NOT_FOUND
  }
}
export default notFoundError;