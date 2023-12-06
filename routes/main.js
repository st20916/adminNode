const express = require('express')
    , router = express.Router();

/* GET Home page */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;