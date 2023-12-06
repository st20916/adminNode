const express = require('express')
    , router = express.Router()
    , controller = require('./data.controller');

/* GET Home page */
router.get('/signup', controller.signup);

module.exports = router;