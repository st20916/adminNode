// database.js의 객체 불러와서 사용
const db = require('../../database');

// 로그인
const login = (req, res) => {
    console.log('Login Request body :: ', req.body);

    const { username, password } = req.body;
    const sql = 'SELECT users.*, roles.role_name FROM users JOIN user_roles ON users.id = user_roles.user_id JOIN roles ON user_roles.role_id = roles.role_id WHERE users.username = ? AND users.password_hash = ?';

    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Error querying data from MySQL:', err);
            res.status(500).send('Error querying data from MySQL');
        } else {
            if (results.length > 0) {
                console.log('Login successful');

                // 사용자 정보와 권한 정보 추출
                const user = results[0];
                const { id, username, email, role_name } = user;

                // 로그인 성공 시 사용자 정보와 역할을 반환
                res.status(200).json({ id, username, email, role_name });
            } else {
                console.log('Login failed - user not found or invalid credentials');
                res.status(401).send('Login failed - user not found or invalid credentials');
            }
        }
    });
}

// 회원가입 로직
const signup = (req, res) => {
    console.log('Request body :: ', req.body);

    const { username, password, email } = req.body;

    // 데이터의 유효성을 체크
    if (!username || !password) {
        console.error('회원가입 실패 :: 아이디 또는 비밀번호를 입력하지 않았습니다.');
        return res.status(400).send('Please provide valid username, password');
    }

    const sql = 'INSERT INTO users (username, password_hash, email) VALUES (?, ?, ?)';

    db.query(sql, [username, password, email], (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            res.status(500).send('Error inserting data into MySQL');
        } else {
            console.log('회원가입 성공 !!');
            res.status(200).send('Data inserted into MySQL');
        }
    });
}

module.exports = { signup, login };