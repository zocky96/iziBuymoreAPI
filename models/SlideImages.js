import { Sequelize } from "sequelize";
import db from "../db/db.js";
const {DataTypes} = Sequelize

const Images = db.define("images",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    image:{
        type : DataTypes.STRING,
        allowNull : false
    }
})

export default Images