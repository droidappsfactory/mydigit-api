var crypto = require("crypto");
var path = require("path");
var fs = require("fs");
var User = require("../models/user").User;

module.exports.checkUser = (req, res) => {
  const { email, password } = req.body;

  User.find({ email: email, password: password })
    .then(doc => {
      console.log(doc);
    })
    .catch(err => {
      console.error(err);
    });
    
};

module.exports.signupUser = (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);

  var tmp = new User({ name: name, email: email, password: password });

  tmp.save(function(err) {
    if (err) throw err;
    console.log("saved");
  });

  

  res.status(200).json({ message: "success" });
};
