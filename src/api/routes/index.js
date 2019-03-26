const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts.route');
const authRoutes = require('./auth.route');
const authenticated = require('../middlewares/authenticated');

router.get('/status',authenticated,(req,res)=> res.send('Ok'));

router.use('/auth', authRoutes)
router.use('/posts', postsRoutes);

module.exports = router;