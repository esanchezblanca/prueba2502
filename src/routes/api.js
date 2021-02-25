const router = require('express').Router();


const apiRouter = require('./endpoints');


router.use('/endpoints', apiRouter);


module.exports = router;