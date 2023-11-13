import { Sequelize } from "sequelize";
import db from "../db/db.js"
const {DataTypes} = Sequelize
const SubCategory = db.define("souscategory",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull:false
    }
})
export default SubCategory