const express = require('express');
const router = express.Router();

const authValidation = require('../validations/authentication');
const authController = require('../controllers/auth.controller');

router.route('/login').post(authValidation.login,authController.checkUser);
router.route('/signup').post(authValidation.signup,authController.signupUser);

module.exports = router;