const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts.route');
const authRoutes = require('./auth.route');
const authenticated = require('../middlewares/authenticated');

router.get('/status',authenticated,(req,res)=> res.status(200).json('Up and Running'));

router.use('/auth', authRoutes)
router.use('/posts', postsRoutes);

module.exports = router;