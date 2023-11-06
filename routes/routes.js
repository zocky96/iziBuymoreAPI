import { Router } from "express";
import {getAll,getProductById,createProduct,modifyProduct,deleteProduct,getAllProductName,search} from "../controller/productController.js"
const router = Router()
router.get("/getAll",getAll)
router.get("/getAllProductName",getAllProductName)
router.get("/getProductById/:id",getProductById)
router.post("/createProduct",createProduct)
router.put("/modifyProduct/:id",modifyProduct)
router.delete("/deleteProduct/:id",deleteProduct)
router.post("/search",search)
export default router 