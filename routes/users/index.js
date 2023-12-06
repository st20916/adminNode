const express = require('express')
    , router = express.Router()
    , controller = require('./users.controller');

/* GET users listing. */
router.get('/', controller.users);

module.exports = router;