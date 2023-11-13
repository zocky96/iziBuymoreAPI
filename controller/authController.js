import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const login = (req,res) =>{
     const {email,password} = req.body
     if(!email || !password){
        return res.status(400).json({message:"Bad email or password"})
     }
     User.findOne({where:{email:email},raw:true})
     .then(user =>{
        if(user === null)
        {
            return res.status(402).json({message:"this account does not exist"})
        }
        bcrypt.compare(password,user.password)
        .then(test =>{
           if(!test){
                  return res.status(401).json({message:"wrong password"})
           }
           const token = jwt.sign({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
           },process.env.JWT_SECRET_WORD,{expiresIn:process.env.JWT_DURING})
           console.log(token)
           return res.status(201).json({access_token : token})
        })
        .catch(err => res.status(500).json({message:"Login process failed",error:err}))
     })
     .catch(err => res.status(500).json({message:"Database error",error:err}))
}
export default login