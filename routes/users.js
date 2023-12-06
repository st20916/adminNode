const express = require('express')
    , router = express.Router();

/* GET users listing */
router.get('/', function(req, res, next) {
    res.send('Respond width a Resource');
});

module.exports = router;