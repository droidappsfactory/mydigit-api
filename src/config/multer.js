var multer = require("multer");
var fs = require("fs");
var path = require("path");
var util = require("util");

var mkdir = util.promisify(fs.mkdir);

Promise.resolve().
    then(()=> mkdir('uploads')).
    then(() => console.log('Created uploads folder')).
    catch((e) => console.log('error msg',e));


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.headers.user+file.originalname);
  }
});

var upload =  multer({storage});

module.exports = upload;
