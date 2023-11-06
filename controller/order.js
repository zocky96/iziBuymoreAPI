import { Sequelize } from "sequelize";
import order from "../models/order.js";
import Product from "../models/product.js";
const { Op } = Sequelize
const getAllOrder = (req,res) =>{
      const {userId} = req.params
      if(userId === "null"){
          return res.status(404).json({msg:"not found"})
      }
      console.log("rere "+userId)
      order.findAll(
        {
            attributes:{exclude:["createdAt","updatedAt"]}
        },
        {where: {userId:userId},raw:true}
      )
      .then(order =>{
        res.status(200).json(order)
    })
      .catch(error => res.status(500).json(error))
}
//ok
const getAllOrderPending = (req,res) =>{
    const {userId} = req.params
    if(userId === "null"){
        return res.status(404).json({msg:"not found"})
    }

    order.findAll(

      { 
           where: Sequelize.and({ userId: userId },{ state: 'pending'})
      }
    )
    .then(order =>{
      res.status(200).json(order)
  })
    .catch(error => res.status(500).json(error))
}

const getAllOrderDelivered = (req,res) =>{
    const {userId} = req.params
    if(userId === "null"){
        return res.status(404).json({msg:"not found"})
    }
    console.log("rere "+userId)
    order.findAll(

      {where: Sequelize.and(
          {userId:userId},
          {state:"delivered"}
      ),raw:true}
    )
    .then(order =>{
      res.status(200).json(order)
  })
    .catch(error => res.status(500).json(error))
}





const addOrder = (req,res) =>{
    
    const {userId,id,amount} = req.params
  
    console.log(userId)
    Product.findByPk(userId,{
        attributes:{exclude:["createdAt","updatedAt"]}
    })
    .then(product =>{
        if (!product) return res.status(404).json({msg :"not found"})
        order.create(
    { 
         userId:id,
         productName:product.dataValues.name,
         price:product.dataValues.price,
         image:product.dataValues.image,
         AmountOfProduct:amount,
         state:"pending"
 
    } 
    )
    .then(cart => res.status(201).json({message:"order pedding"}))
    .catch(error => res.status(500).json(error))
        console.log(product.dataValues.name)
    })
    .catch(error => res.status(500).json(error))
}
export {getAllOrder,addOrder,getAllOrderPending,getAllOrderDelivered}