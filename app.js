const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , app = express()
    , routes =  require('./routes')
    , dataController = require('./routes/data/data.controller')
    , userController = require('./routes/users/users.controller')
    , figlet = require('figlet');

// Port 설정 (process.env는 node JS 환경 변수 가져올 때)
app.set('port', process.env.PORT || 5000);
// IP 설정
app.set('host', process.env.HOST || '0.0.0.0');

app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

// 로그인
app.post('/api/login', dataController.login);

// 회원가입
app.post('/api/signup', dataController.signup);

// 사용자 조회
app.get('/user/list', userController.selectUser);

// app.listen() 함수 사용하여 서버 실행
// 클라이언트는 'host:port'로 노드 서버에 요청하여 보낼 수 있음.
figlet('Server Start', function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        
        return;
    }
    console.log(data);
});

app.listen(app.get('port'), () => {
    console.log('Server is Running on : ' + app.get('port'));
});