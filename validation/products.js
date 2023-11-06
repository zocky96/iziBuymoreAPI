import Joi from "joi";
const productValidation = (body) =>{
   const produitShema = Joi.object(
        {
            name: Joi.string().min(2).max(100).trim(),
            price : Joi.number().required(),
            description: Joi.string().min(2).max(500).trim(),
            image: Joi.string().min(2).max(100).trim(),
            
        }
    )
    return produitShema.validate(body)
}
export default productValidation