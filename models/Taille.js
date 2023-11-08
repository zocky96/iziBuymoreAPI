import { Sequelize } from "sequelize";
import db from "../db/db.js";
const {DataTypes} = Sequelize

const Taille = db.define("taille",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
 
    size:{
        type : DataTypes.STRING,
        allowNull : false
    },
    
})

export default Taille 