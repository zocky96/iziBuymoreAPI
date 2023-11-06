import { Router } from "express";
import { getCart,addToCart,deleteToCart } from "../controller/cart.js";
const routerCart = Router()
routerCart.get("/getCart/:userId",getCart)
routerCart.get("/addToCart/:id/:userId",addToCart)
routerCart.delete("/deleteToCart/:id",deleteToCart)
export default routerCart