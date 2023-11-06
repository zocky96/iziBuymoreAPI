import { Router } from "express";
import { getFavoris,addToFavoris,deleteFromFavoris} from "../controller/favorisController.js";
const routerFav = Router()
routerFav.get("/getFavoris/:userId",getFavoris)
routerFav.get("/addToFavoris/:id/:userId",addToFavoris)
routerFav.delete("/deleteFromFavoris/:id",deleteFromFavoris)
export default routerFav