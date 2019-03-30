var User = require("../models/user").User;

module.exports = (req,res, next) => {

    // const { email, password } = req.body;
    // User.find({ email: email, password: password })
    // .then(doc => {
    //   console.log(doc)
    //   if(doc.length>0) {
    //     res.status(HttpStatus.OK).json({ message: "success" });
    //   }else{
    //     res.status(HttpStatus.UNAUTHORIZED).json({message: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED)});
    //   }
    //   next();
    // })
    // .catch(err => {
    //   res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)});
    // });

    next();
     
}