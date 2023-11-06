import Sequelize from "sequelize";
import db from "../db/db.js";
const { DataTypes } = Sequelize
const Product = db.define("product",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    price : {
        type : DataTypes.FLOAT,
        allowNull : false
    },
    description : {
        type : DataTypes.TEXT,
        allowNull : true
    },
    image:{
        type : DataTypes.STRING,
        allowNull : false
    }, 
    colored:{
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue:false
        
    }, 
    sized:{
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue:false
        
    }
})
export default Product