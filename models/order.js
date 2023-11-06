import { Sequelize } from "sequelize";
import db from "../db/db.js";
const { DataTypes } = Sequelize
const order = db.define("order",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    userId:{
        type : DataTypes.INTEGER.UNSIGNED,
        allowNull : false
    },
    productName:{
        type : DataTypes.STRING,
        allowNull : false
    },
    price:{
        type : DataTypes.FLOAT,
        allowNull : false
    },
    image:{
        type : DataTypes.STRING,
        allowNull : false
    },
    AmountOfProduct:{
        type : DataTypes.INTEGER,
        allowNull : false
    },
    state:{
        type: DataTypes.ENUM,
        values: ['pending','delivered',]
    }
})
export default order