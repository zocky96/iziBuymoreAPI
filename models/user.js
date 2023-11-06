import Sequelize from "sequelize";
import db from "../db/db.js";
const { DataTypes } = Sequelize
const User = db.define("user",{
    id:{
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    firstName:{
        type : DataTypes.STRING,
        allowNull :false
    },
    lastName:{
        type : DataTypes.STRING,
        allowNull :false
    },
    phone:{ 
        type : DataTypes.STRING,
        allowNull : false
    },
    adresse:{
        type : DataTypes.STRING,
        allowNull :false
    },
    email:{
        type : DataTypes.STRING,
        allowNull :false
    },
    password:{
        type : DataTypes.STRING,
        allowNull :false
    }

})
export default User