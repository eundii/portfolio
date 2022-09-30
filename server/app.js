const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs'); // file system

app.use(session({
    secret: 'secret code', // 세션에 대한 키 - 임의 지정함
    resave: false, // 리퀘스트 요청이 왔을 때 세션의 수정사항이 생기지 않도록 다시 저장할 것 인지의 여부
    saveUninitialized: false, // 세션에 저장할 내역이 없더라도 세션을 재저장 할 것 인지의 여부
    cookie: {
        secure: false, 
        maxAge: 1000 * 60 * 60 // 쿠키 유효시간 1시간
    }
}))

const  server = app.listen(3000, () => {
    console.log('server started. port 3000.');
    // 터미널 => node app.js 입력 하면 서버 실행
});


let sql = require('./sql.js');

fs.watchFile(__dirname + 'sql.js', (curr, prev) => {
    console.log('sql 변경 시 재시작 없이 반영되도록 함.');
    delete require.cache[require.resolve('./sql.js')]; // 캐시 날리기
    sql = require('./sql.js');
})

// DB 연결
const db = {
    database: "portfolio", // db명
    connectionLimit: 10,
    host: "localhost", //mariadb가 설치된 호스트
    user: "root",
    password: "mariadb"
};
const dbPool = require('mysql').createPool(db);

app.post('/api/login', async (request, res) => {
    request.session['email'] = 'eundii9292@gmail.com';
    res.send('ok');
});

app.post('/api/logout', async (request, res) => {
    request.session.destroy();
    res.send('ok');
});

// 서버 호출 시 위에 선언 된 login, logout 빼고 나머지 경로로 요청
app.post('/apirole/:alias', async(request, res) => {
    // 로그인 안한 사용자가 쿼리 호출 못하게 하기 (login 후 요청 하면 가능)
    if(!request.session.email) {
        return res.status(401).send({error: 'You need to login!'})
    }

    try {
        // 사용자가 request 요청 시 :alias 주소값이 request.params.alias로 넘어감
        res.send(await req.db(request.params.alias))
    } catch(err) {
        // 에러메시지
        res.status(500).send({
            error: err
        });
    }
});

app.post('/api/:alias', async(request, res) => {
    try {
        // 사용자가 request 요청 시 :alias 주소값이 request.params.alias로 넘어감
        res.send(await req.db(request.params.alias))
    } catch(err) {
        // 에러메시지
        res.status(500).send({
            error: err
        });
    }
});


const req = {
    async db(alias, param = [], where = '') {
        return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
            if (error.code != 'ER_DUP_ENTRY')
            console.log(error);
            resolve({
            error
            });
        } else resolve(rows);
        }));
    }
};

// post => http://localhost:3000/api/projectList 했을 때 projcetList 가 sql[alias]의 alias로 들어감.