import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";



//============ route
import router from "./routes/routes.js";
import routerUser from "./routes/userRouter.js";
import routerAuth from "./routes/auth.js";
import routerCart from "./routes/cart.js";
import routerFav from "./routes/favoris.js";
import routerOrder from "./routes/order.js";
import routerImage from "./routes/otherImage_.js";
import routerCategory from "./routes/category.js";
import routerSubCategory from "./routes/subCategory.js";
//------------models---------------------
import Product from "./models/product.js";
import Images from "./models/SlideImages.js"
import Size from "./models/Taille.js"
import Color from "./models/color.js"
import Cart from "./models/cart.js"
//-----------------------------------------
import db from "./db/db.js"
import bodyParser from 'body-parser'
import SubCategory from "./models/sub_category.js";
import Category from "./models/category.js";
const app = express()
//app.use(helmet())
app.use(express.json())
app.use(express.static("public"))

app.use(router)
app.use(routerUser)
app.use(routerCart)
app.use(routerFav)
app.use(routerImage)
app.use(routerOrder)
app.use(routerCategory)
app.use(routerSubCategory)
//pp.use(routerImage)
app.use("/auth",routerAuth)
//---------------- Relation -------------------------
Product.hasMany(Size)
Size.belongsTo(Product,{foreignKey:'productId'})

Product.hasMany(Images)
Images.belongsTo(Product,{foreignKey:'productId'})

Product.hasMany(Color)
Color.belongsTo(Product)

Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)

Category.hasMany(Product)
Product.belongsTo(Category)


SubCategory.hasMany(Product)
Product.belongsTo(SubCategory)

//Cart.hasMany(Size,{foreignKey:'productId'})
//Size.belongsTo(Cart,{foreignKey:'productId'})
  
//Cart.hasMany(Color,{foreignKey:'productId'})
//Color.belongsTo(Cart,{foreignKey:'productId'})

//----------------------------------------------------
db.sync({alter:true})
.then((console.log("nu bn")))
.catch(error => console.log(error))


dotenv.config({path:process.cwd()+"\\.env"}) 
var port = process.env.SERVER_PORT
console.log(port) 
app.listen(port,() => console.log("listen on port "+port))  