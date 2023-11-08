import { where } from "sequelize";
import Cart from "../models/cart.js";
import Product from "../models/product.js";
import Size from "../models/Taille.js";
import Images from "../models/SlideImages.js"
import {  getProductById } from "./productController.js";
import Color from "../models/color.js";
const getCart = (req,res) => {
    const {userId} = req.params
    console.log(userId)
    Cart.findAll({
        where:{
            userId:userId
        },
     
        
    })
    .then(cart => {
        console.log("okok")
        if (!cart) return res.status(404).json({message:"not found"})
        res.status(200).json(cart)
    })
    .catch(error => res.status(500).json(error))
}
const addToCart = (req,res) =>{
    //const {name,price,description,image} =  getProductById(req=id,res=res)
    const {userId} = req.params
    const {id} = req.params
    Product.findByPk(id,{
        attributes:{exclude:["createdAt","updatedAt"]}
    })
    .then(product =>{
        if (!product) return res.status(404).json({msg :"not found"})
        Cart.create(
    { 
         userId:userId,
         productName:product.dataValues.name,
         price:product.dataValues.price,
         image:product.dataValues.image,
         AmountOfProduct:1, 
         productId:id,
         colored:product.dataValues.colored,
         sized:product.dataValues.sized
 
    } 
    )
    .then(cart => res.status(201).json({message:"Product added"}))
    .catch(error => res.status(500).json(error))
        console.log(product.dataValues.name)
    })
    .catch(error => res.status(500).json(error))
    
}
const deleteToCart = (req,res) =>{
    const {id} = req.params
      Cart.destroy(
        {
        
            where:{
                id:id
            }
        }
      )
      .then(cart => res.status(201).json({message:"Product deleted"}))
      .catch(err => res.status(500).json({message:"Database error",error:err}))
}
export {getCart,addToCart,deleteToCart}