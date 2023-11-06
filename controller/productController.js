import Product from "../models/product.js"
import Images from "../models/SlideImages.js"
import { Sequelize } from "sequelize";
import productValidation from "../validation/products.js"
import Size from "../models/Taille.js";
import Color from "../models/color.js";
const { Op } = Sequelize.Op
const search = (req,res) => {
    const {word} = req.body
    console.log(word)
    Product.findAll(
        {where: Sequelize.or(
        {id:{
            [Sequelize.Op.like]:"%"+word+"%"
        }},
        {name:{
            [Sequelize.Op.like]:"%"+word+"%",
        }}
    )})
    .then(products =>{
        res.status(200).json(products)
    })
    .catch(error => res.status(500).json(error))
}
const getAllProductName = (req,res) =>{
    Product.findAll({
        attributes:["name"]
    })
    .then(products =>{
        res.status(200).json(products)
    })
}
const getAll = (req,res) => {
    Product.findAll({
        include:[
            Images,
            Color,
            Size
        ]
    })
    .then(products =>{
        res.status(200).json(products)
    })
    .catch(error => res.status(500).json(error))
}
const getProductById = (req,res) => {
    const {id} = req.params
    console.log(id)
    Product.findByPk(id,{
        include:[
            Images,
            Color,
            Size
        ]
        
    }
    ) 
    .then(product =>{
        if (!product) return res.status(404).json({msg :"not found"})
        res.status(200).json(product) 
    })
    .catch(error => res.status(500).json(error))

}
const createProduct = (req,res) => {
    const {body} = req
    //const {error} = productValidation(body) 
    //if (error) return res.status(401).json(error.details[0].message)

    Product.create({...body})
    .then(()=> {
        res.status(201).json({msg : "create product"})
        //select max(id) for put images
        
    })
    .catch(error => res.status(500).json(error))
   
   
}
const modifyProduct = (req,res) => {}
const deleteProduct = (req,res) => {}
export {getAll,getProductById,createProduct,modifyProduct,deleteProduct,getAllProductName,search}