const express = require('express');
const router = express.Router();
const multer = require('../../config/multer');

const authValidation = require('../validations/authentication');
const authController = require('../controllers/auth.controller');

router.route('/login').post(authValidation.login,authController.checkUser);
router.route('/signup').post(authValidation.signup,authController.signupUser);
router.route('/upload').post(multer.single('logo'),(req,res)=>{
    res.status(200).json({message:'success'});
});

module.exports = router;
