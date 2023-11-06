import {addImage,addColor,addSize,getAllImage,getAllColor,getAllSize} from "../controller/otherImage.js";
import { Router } from "express";
const routerImage = Router()
routerImage.put("/addImages",addImage)
routerImage.put("/addColor",addColor)
routerImage.put("/addSize",addSize)
routerImage.get("/getAllImages/:productId",getAllImage)
routerImage.get("/getAllSizes/:productId",getAllSize)
routerImage.get("/getAllColors/:productId",getAllColor)
export default routerImage  