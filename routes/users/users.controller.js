// database.js의 객체 불러와서 사용
const db = require('../../database');

// 사용자 조회
const selectUser = (req, res) => {
    console.log('User List Request body :: ', req.body);

    const sql = 'SELECT users.*, roles.role_name FROM users JOIN user_roles ON users.id = user_roles.user_id JOIN roles ON user_roles.role_id = roles.role_id';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error querying data from MySQL:', err);
            res.status(500).send('Error querying data from MySQL');
        } else {
            // 결과에서 필요한 정보 추출
            const users = results.map(user => {
                const { username, email, role_name } = user;
                return { username, email, role_name };
            });

            // 전체 사용자 목록 반환
            res.status(200).json(users);
        }
    });
}

module.exports = { selectUser };