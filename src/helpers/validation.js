import Joi from 'joi';

const signUpValidationSchema = Joi.object({
    name: Joi.string().required(),       
    national_id: Joi.number().min(16).max(16).required(),
    employee_code: Joi.string().min(7).max(7).required(),
    phone_number: Joi.number().min(10).max(10)

});
export default signUpValidationSchema;