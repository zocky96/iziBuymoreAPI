import Joi from "joi";
const UserValidation = (body) => {
    const userShema = Joi.object(
        {
            firstName : Joi.string().min(2).max(100).trim(),
            lastName : Joi.string().min(2).max(100).trim(),
            phone : Joi.string().min(8).max(13).trim(),
            adresse : Joi.string().min(2).max(100).trim(),
            email : Joi.string().min(5).max(100).trim(),
            password : Joi.string().min(6).max(100).trim()
 
        }
    )
    return userShema.validate(body)

}
export default UserValidation