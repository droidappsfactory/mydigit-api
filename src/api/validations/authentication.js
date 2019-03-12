const Joi = require('joi');

module.exports.login = (req,res,next) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).alphanum().required()
     }).unknown(false);

    Joi.validate(req.body, schema ,(err,value)=>{
        if(err){
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: req.body
            })
        } else {
            next();
        }
    })
} 

module.exports.signup = (req,res,next) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).alphanum().required(),
        name: Joi.string().required()
     }).unknown(false);

    Joi.validate(req.body, schema ,(err,value)=>{
        if(err){
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: req.body
            })
        } else {
            next();
        }
    })
} 

module.exports.upload = (req,res,next) => {
   
    

    next();
} 