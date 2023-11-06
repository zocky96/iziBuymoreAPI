import { Router } from "express";
import {getAllOrder,addOrder,getAllOrderPending,getAllOrderDelivered} from "../controller/order.js";
const routerOrder = Router()
routerOrder.get("/getAllOrders/:userId",getAllOrder)
routerOrder.get("/getAllOrdersPending/:userId",getAllOrderPending)
routerOrder.get("/getAllOrdersDelivered/:userId",getAllOrderDelivered)
routerOrder.get("/addOrder/:id/:userId/:amount",addOrder)
export default routerOrder