import  Express  from "express";
const router=Express.Router();
 import {createJob,getJob,updateJob,DeleteJob,checkStatus} from "../controller/jobsController.js";
 router.route('/createJob').post(createJob)
 router.route('/getJob').post(getJob)
 router.route('/updateJob').post(updateJob)
 router.route('/DeleteJob').post(DeleteJob)
 router.route('/checkStatus').post(checkStatus)
 export default router;