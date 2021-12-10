const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const favoriteRoutes = require('./favoriteRoutes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/favorites', favoriteRoutes);


module.exports = router;