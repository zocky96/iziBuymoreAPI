import Images from "../models/SlideImages.js";
import Size from "../models/Taille.js";
import Color from "../models/color.js"
import db from "../db/db.js";
const addImage = (req,res)=>{
    const {body} = req

    Images.create({...body})
    .then(()=> {
        res.status(201).json({msg : "create product"})
        
    })
    .catch(error => res.status(500).json(error))

}

const addSize = (req,res)=>{
    const {body} = req
  
    Size.create({...body})
    .then(()=> {
        res.status(201).json({msg : "create product"})
        
    })
    .catch(error => res.status(500).json(error))

}

const addColor = (req,res)=>{
    const {body} = req

    Color.create({...body})
    .then(()=> {
        res.status(201).json({msg : "create product"})
        
    })
    .catch(error => res.status(500).json(error))

} 
const getAllImage = (req,res) =>{
    const {productId} = req.params
    console.log(productId)
    Images.findAll({
        where:{productId:productId}
    }) 
    .then(image =>{
        res.status(200).json(image) 
    })
    .catch(error => res.status(500).json(error))
}

const getAllSize = (req,res) =>{
    const {productId} = req.params
    console.log(productId)
    Size.findAll({
        where:{productId:productId}
    }) 
    .then(size =>{
        res.status(200).json(size) 
    })
    .catch(error => res.status(500).json(error))
}

const getAllColor = (req,res) =>{
    const {productId} = req.params
    console.log(productId)
    Color.findAll({
        where:{productId:productId}
    }) 
    .then(color =>{
        res.status(200).json(color) 
    })
    .catch(error => res.status(500).json(error))
}
export {addImage,addColor,addSize,getAllImage,getAllColor,getAllSize}