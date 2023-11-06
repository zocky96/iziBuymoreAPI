import Product from "../models/product.js";
import User from "../models/user.js";
import UserValidation from "../validation/user.js";
import bcrypt from "bcrypt";
const updateFullName = (req,res) =>{
    const {body} = req
    const {id} = req.params
    console.log("test okok")
    User.findByPk(id)
    .then(Product =>{
        if(!Product) return res.status(404).json({msg :"not found"})
        Product.firstName = body.firstName
        Product.lastName = body.lastName
        Product.save()
        .then(() => res.status(201).json({msg : "user updated"})
        )
        .catch(error => res.status(500).json(error))
    }
    )
    .catch()

}
const updatephone = (req,res) =>{
    const {body} = req
    const {id} = req.params
    console.log("test okok")
    User.findByPk(id)
    .then(Product =>{
        if(!Product) return res.status(404).json({msg :"not found"})
        Product.phone = body.phone
        Product.save()
        .then(() => res.status(201).json({msg : "user updated"})
        )
        .catch(error => res.status(500).json(error))
    }
    )
    .catch()

}
const updateEmail = (req,res) =>{
    const {body} = req
    const {id} = req.params
    console.log("test okok")
    User.findByPk(id)
    .then(Product =>{
        if(!Product) return res.status(404).json({msg :"not found"})
        Product.email = body.email
        Product.save()
        .then(() => res.status(201).json({msg : "user updated"})
        )
        .catch(error => res.status(500).json(error))
    }
    )
    .catch()

}

const getAllUser = (req,res) => {
    User.findAll({
        attributes:{exclude:["createdAt","updatedAt"]}
    })
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(error => res.status(500).json(error))
}
const getUserById = (req,res) => {
    const {id} = req.params
    User.findByPk(id,{
        attributes:{exclude:["createdAt","updatedAt"]}
    })
    .then(user =>{
        if (!user) return res.status(404).json({msg :"not found"})
        res.status(200).json(user)
    })
    .catch(error => res.status(500).json(error))

} 
const updateAddresse = (req,res) =>{
    const {body} = req
    const {id} = req.params
    console.log("test okok")
    User.findByPk(id)
    .then(Product =>{
        if(!Product) return res.status(404).json({msg :"not found"})
        Product.adresse = body.adresse
        Product.save()
        .then(() => res.status(201).json({msg : "user updated"})
        )
        .catch(error => res.status(500).json(error))
    }
    )
    .catch()

}
const createUser = (req,res) => {
     console.log("okok")
     const {body} = req
    
     const {firstName,lastName,phone,adresse,email,password} = req.body
     console.log(body.phone)
     const {error} = UserValidation(body)
     if (error) return res.status(401).json(error.details[0].message)
     if (!firstName || !lastName || !phone || !adresse || !email || !password){
        return res.status(400).json({message:'missing data'})
     }
     User.findOne({where: {email:email},raw:true})
     .then(user =>{
        if(user !== null){
            return res.status(409).json({message:"the user already exists"})
        }
        bcrypt.hash(password,10)
        .then(hash => {
            
            body.password = hash
            User.create({...body})
            .then(user => res.status(201).json({message:"user created"}))
            .catch(err => res.status(500).json({message:"Database error",error:err}))
        })
        .catch(err => res.status(500).json({message:"hash error"}))
        
     })
     .catch(err => res.status(500).json({message:"Database error",error:err}))

}
export { getAllUser,getUserById,createUser,updateAddresse,updateEmail,updatephone,updateFullName}