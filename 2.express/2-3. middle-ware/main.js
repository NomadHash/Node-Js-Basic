const express = require('express');
const app = express();
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');
const nunjucks = require('nunjucks'); //view engine 'nunjucks' 가져오기
const logger = require('morgan')


const port = 3000;

nunjucks.configure('template', { //첫 번째 인자인 template는 폴더 이름에 따라 바뀔 수 있다.
    autoescape : true, //xss공격 방어
    express : app
});

//Set main middle-ware
app.use( logger('dev')); //morgan 미들웨어 셋팅

app.get('/',(req,res) => {
    res.send("Hello Express!");
});

function vipMiddleware(req,res,next){
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin', vipMiddleware, admin);
app.use('/contacts', contacts) //라우트 미들웨어


app.listen(port,()=>{
    console.log("Express server on port 3000!");
});
