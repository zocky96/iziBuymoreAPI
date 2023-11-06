import { Sequelize } from "sequelize";
//import Product from "../models/product.js"
//import Images from "../models/SlideImages.js"
let seq = new Sequelize("sysizi","root","arnob123",{dialect:'mysql',host: '198.71.48.131'})
//let seq = new Sequelize("izi","izi","1234",{dialect:'mysql',host: 'localhost'})
//import Product from "../models/product.js" 
//Product.hasMany(Images)
//Images.belongsTo(Product)
export default seq   