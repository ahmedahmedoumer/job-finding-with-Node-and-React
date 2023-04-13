console.log("server running");
import  Express  from "express";
const app=Express();
import dotenv from "dotenv";
dotenv.config();


import connectDB from "./db/connect.js";

import router from "./routes/authRoutes.js"; 
import Jobrouter from "./routes/jobRoutes.js";

//middleware
import { notFoundMiddleware } from "./middleware/not-found.js";
import { errorHandling } from "./middleware/error-handling.js";
import requestLimiter from "./controller/requestLimiter.js";

app.get('/',(req,res)=>{
  res.send("wellcome");
});

app.use(Express.json());

app.use(requestLimiter);
app.use('/api/v1/auth',router);
app.use('/api/v1/jobs',Jobrouter);

app.use(notFoundMiddleware);
app.use(errorHandling);
const port=process.env.PORT || 5000;

const start = async()=>{
  try{
    await connectDB(process.env.MONGO_URL);
    app.listen(port,()=>console.log(`server is running on port number ${port}`));
   }
  catch(error){
    console.log(error);
  }
}
start()
