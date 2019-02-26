var crypto = require("crypto");
var path = require("path");
var fs = require("fs");

module.exports.getAll = (req,res)=>{
    res.send('Hello postsssss');
}

module.exports.cryptoCheck = (req,res)=>{
    const body = req.body;
    console.log('body ', body);
    res.send('Crypto Service');
}