import { Router } from "express";
import {getAllUser,getUserById,createUser,updateAddresse,updateEmail,updatephone,updateFullName} from "../controller/userController.js"
const routerUser_ = Router()
routerUser_.get("/getAllUser",getAllUser)
routerUser_.get("/getUserById/:id",getUserById)
routerUser_.put("/createUser",createUser)
routerUser_.put("/updateAddresse/:id",updateAddresse)
routerUser_.put("/updateEmail/:id",updateEmail)
routerUser_.put("/updatePhone/:id",updatephone)
routerUser_.put("/updateFullName/:id",updateFullName)
export default routerUser_