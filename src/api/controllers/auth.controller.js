var crypto = require("crypto");
var path = require("path");
var fs = require("fs");
var HttpStatus = require('http-status-codes');

var User = require("../models/user").User;


module.exports.checkUser = (req, res) => {
  const { email, password } = req.body;

  User.find({ email: email, password: password })
    .then(doc => {
      console.log(doc)
      if(doc.length>0) {
        res.status(HttpStatus.OK).json({ message: "success" });
      }else{
        res.status(HttpStatus.UNAUTHORIZED).json({message: HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED)});
      }
     
    })
    .catch(err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)});
    });
    
};

module.exports.signupUser = (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  var tmp = new User({ name: name, email: email, password: password });

  tmp.save(function(err) {
    if (err) {
      console.log("error");
      res.status(HttpStatus.PRECONDITION_FAILED).json({message: HttpStatus.getStatusText(HttpStatus.PRECONDITION_FAILED)});
    }else {
      console.log("saved");
      res.status(HttpStatus.OK).json({ message: "success" });
    }

   
  });

  

  
};
