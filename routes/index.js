const express = require('express')
    , router = express.Router();

const main = require('./main.js')
    , user = require('./users.js');

// url 변경 또는 router 변경 시, 이 부분만 수정 또는 추가하면 됨.
router.use('/main', main);
router.use('/user', user);

module.exports = router;