const express = require('express')
    , router = express.Router()
    , controller = require('./main.controller');

/* GET Home page */
router.get('/', controller.main);

module.exports = router;