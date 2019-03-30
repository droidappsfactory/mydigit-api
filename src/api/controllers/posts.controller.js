var crypto = require("crypto");
var path = require("path");
var fs = require("fs");

var async = require('async');

module.exports.getAll = (req,res)=>{
    
    // async.parallel([function(){
    //     console.log('parallel functoin 1')
    // },function(){
    //     console.log('parallel functoin 2')
    // }],(err, data)=>{
    //     console.log('Task completed');
    //     res.send('Hello postsssss');
    // })
    
    
}

module.exports.cryptoCheck = (req,res)=>{
    const body = req.body;
    console.log('body ', body);
    res.send('Crypto Service');
}