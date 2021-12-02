const router = require('express').Router();

const homeRoute = require('./homeRoutes');

router.use('/', homeRoute);

module.exports = router;
