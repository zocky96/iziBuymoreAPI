import Category from "../models/category.js";
import Product from "../models/product.js";
import SubCategory from "../models/sub_category.js";

const getCategoryById = (req,res) =>{
    const {id} = req.params
    Category.findByPk(id,{
        include:[
            Product,
            SubCategory
        ]
    })
    .then(categories =>{
        res.status(200).json(categories)
    })
    .catch(error => res.status(500).json(error))
}

const createCategory = (req,res) =>{
    const {body} = req
   
    Category.create({...body})
    .then(
        res.status(201).json({message:"category created"})
    )
    .catch(error => res.status(500).json(error))
}
const getAllCategories = (req,res) =>{
    Category.findAll()
    .then(categories =>{
        res.status(200).json(categories)
    })
    .catch(error => res.status(500).json(error))
}
export { createCategory,getAllCategories,getCategoryById}