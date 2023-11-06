import { Sequelize } from "sequelize";
import db from "../db/db.js";
const {DataTypes} = Sequelize
 
const Color = db.define("color",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },

    color:{
        type : DataTypes.STRING,
        allowNull : false
    }
})

export default Color