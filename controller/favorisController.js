import Favoris from "../models/favoris.js";
import Product from "../models/product.js";
const getFavoris = (req,res) =>{
    const {userId} = req.params
    Favoris.findAll({
        attributes:{exclude:["createdAt","updatedAt"]},
        where:{userId:userId}
    })
    .then(favoris =>{
        res.status(200).json(favoris)
    })
    .catch(error => res.status(500).json(error))
}
const addToFavoris = (req,res) =>{
    const {userId} = req.params
    const {id} = req.params
    console.log(id)
    
    Product.findByPk(id,{
        attributes:{exclude:["createdAt","updatedAt"]}
    })
    .then(product =>{
        if (!product) return res.status(404).json({msg :"not found"})
        Favoris.create(
    { 
         userId:userId,
         productName:product.dataValues.name,
         price:product.dataValues.price,
         image:product.dataValues.image,
         productId:product.dataValues.id
    } 
    )
    .then(favoris => res.status(201).json({message:"Product added"}))
    .catch(error => res.status(500).json(error))
        
    })
    .catch(error => res.status(500).json(error))
}
const deleteFromFavoris = (req,res) =>{
    const {id} = req.params
      Favoris.destroy(
        {
            
            where:{
                id:id
            }
        }
      )
      .then(cart => res.status(201).json({message:"Product deleted"}))
      .catch(err => res.status(500).json({message:"Database error",error:err}))
}
export {getFavoris,addToFavoris,deleteFromFavoris}