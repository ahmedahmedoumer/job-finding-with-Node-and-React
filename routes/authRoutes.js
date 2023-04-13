import  Express  from "express"
const router=Express.Router()
import { register,login,updateUser  } from "../controller/authController.js"
router.route('/register').post(register)
router.route('/updateUser').post(updateUser)
router.route('/login').post(login)
 export default router;