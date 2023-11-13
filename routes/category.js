import { Router } from "express";
import {createCategory,getAllCategories,getCategoryById} from "../controller/category.js";
const routerCategory = Router()
routerCategory.get("/getAllCategories",getAllCategories)
routerCategory.post("/createCategory",createCategory)
routerCategory.get("/getCategoryById/:id",getCategoryById)
export default routerCategory