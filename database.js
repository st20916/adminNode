// npm으로 설치한 mysql 불러 옴
const mysql = require('mysql');
// mysql connection 생성
// mysql 8.0 이상은 인증 방식이 달라서 'mysql_native_password'로 인증 방식을 바꿔야 함.
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '_wlvmffjtm_',
    database: 'test',
    authSwitchHandler: function({ pluginName, pluginData }, cb) {
        if (pluginName === 'caching_sha2_password') {
            const password = '_wlvmffjtm_'; // 'mysql_native_password'로 변경된 비밀번호
            const securePassword = mysql.createNativePassword().password(password);
            
            cb(null, securePassword);
        }
    },
});

con.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log('Connected !!');
    }
});

module.exports = con;