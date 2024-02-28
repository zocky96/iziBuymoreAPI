import { Sequelize } from "sequelize";
import db from "../db/db.js"
const {DataTypes} = Sequelize
const Category = db.define("category",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    categorie:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull:false
    }
})
export default Category