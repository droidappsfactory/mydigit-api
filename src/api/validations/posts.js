const Joi = require('joi');

module.exports.getposts = (req,res,next) => {

    const schema = Joi.object().keys({
        name: Joi.string().allow(['rishi','sri']).required()
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