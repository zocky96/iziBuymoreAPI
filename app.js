import express from "express";
import router from "./routes/routes.js";
import routerUser from "./routes/userRouter.js";
import routerAuth from "./routes/auth.js";
import routerCart from "./routes/cart.js";
import routerFav from "./routes/favoris.js";
import routerOrder from "./routes/order.js";
import routerImage from "./routes/otherImage_.js";
//------------models---------------------
import Product from "./models/product.js";
import Images from "./models/SlideImages.js"
import Size from "./models/Taille.js"
import Color from "./models/color.js"
//-----------------------------------------
import db from "./db/db.js"
import bodyParser from 'body-parser'
const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(router)
app.use(routerUser)
app.use(routerCart)
app.use(routerFav)
app.use(routerImage)
app.use(routerOrder)
//pp.use(routerImage)
app.use("/auth",routerAuth)
//---------------- Relation -------------------------
Product.hasMany(Size)
Size.belongsTo(Product)

Product.hasMany(Images)
Images.belongsTo(Product)

Product.hasMany(Color)
Color.belongsTo(Product)
 

//----------------------------------------------------
db.sync({alter:true})
.then((console.log("nu bn")))
.catch(error => console.log(error))
var port = 4444
app.listen(port,() => console.log("listen on port "+port))  