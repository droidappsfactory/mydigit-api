const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts.route');
const authRoutes = require('./auth.route');


router.get('/status',(req,res)=> res.send('Ok'));

router.use('/auth', authRoutes)
router.use('/posts', postsRoutes);

module.exports = router;