import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path:process.cwd()+"\\.env"}) 

//let seq = new Sequelize("sysizi","root","arnob123",{dialect:'mysql',host: '198.71.48.131'})
let seq = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER_NAME,
        process.env.DB_PASSWORD,   
        {
            dialect:'mysql',
            host: process.env.DB_HOST,
            port:process.env.DB_PORT
        }
    ) 
export default seq         