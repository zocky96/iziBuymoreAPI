import SubCategory from "../models/sub_category.js";
const createSubCategory = (req,res) =>{
    console.log("okok")
    const {body} = req
   
    SubCategory.create({...body})
    .then(
        res.status(201).json({message:"sub category created"})
    )
    .catch(error => res.status(500).json(error))
}
export default createSubCategory