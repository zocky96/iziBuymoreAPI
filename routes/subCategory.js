import createSubCategory from "../controller/subCategory.js";
import { Router } from "express";

const routerSubCategory = Router()
routerSubCategory.put("/createSubCategory",createSubCategory)
export default routerSubCategory