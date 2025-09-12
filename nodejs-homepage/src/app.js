
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.get('/', (req, res) => {
  res.render('index', { title: 'SweetFactory' });
});

app.get('/products', (req, res) => {
  res.render('products', { title: '제품 소개' });
});

app.get('/marketing', (req, res) => {
  res.render('marketing', { title: '마케팅 및 홍보' });
});

app.get('/quality', (req, res) => {
  res.render('quality', { title: '제조 및 품질관리' });
});

app.get('/vision', (req, res) => {
  res.render('vision', { title: '미래 비전' });
});

app.get('/Login', (req, res) => {
  res.render('Login', { title: '로그인' });
});

app.get('/Join', (req, res) => {
  res.render('Join', { title: '회원가입' });
});

// gemini 짱이다
app.use(express.urlencoded({ extended: true }));

app.post('/submit-multiple', (req, res) => {
  const {name, email, age} = req.body;
  res.send(`<h1>Level3 : 회원가입성공</h1><br><p> 이름 : ${name}, 이메일 : ${email}, 나이 : ${age}</p>`)
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
