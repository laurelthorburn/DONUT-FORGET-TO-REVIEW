const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const imageRoutes = require('./imageRoutes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/favorites', favoriteRoutes);
router.use('/images', imageRoutes);


module.exports = router;