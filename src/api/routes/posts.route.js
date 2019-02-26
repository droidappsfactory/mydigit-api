const express = require('express');
const postController = require('../controllers/posts.controller');
const router = express.Router();
const postsValidation = require('../validations/posts');


router.route('/').get(postController.getAll);

router.route('/').post(postsValidation.getposts,postController.cryptoCheck);




module.exports = router;