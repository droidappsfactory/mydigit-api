const express = require('express');
const postsRoutes = require('./posts.route');
const router = express.Router();

router.get('/status',(req,res)=> res.send('Ok'));

router.use('/posts',postsRoutes);

module.exports = router;