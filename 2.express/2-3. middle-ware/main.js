const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks'); //view engine 'nunjucks' 가져오기
const logger = require("morgan");

//Route-module
const admin = require("./routes/admin");
const contacts = require("./routes/contacts");

var name = "";


const port = 3000;

//Set template-engine
nunjucks.configure('template', { //첫 번째 인자인 template는 폴더 이름에 따라 바뀔 수 있다.
    autoescape : true, //xss공격 방어
    express : app
});

//Set main middle-ware
app.use( logger('dev')); //morgan 미들웨어 셋팅
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use((req,res,next)=>{
    app.locals.isLogin = false;
    app.locals.req_path = req.path;
    next();
});

app.get('/',(_,res) => {
    res.send("Hello Express!");
});

function vipMiddleware(req,res,next){
    console.log('최우선 미들웨어');
    next();
}

app.use('/admin', admin);
app.use((req, res, next)=>{
    res.status(400).render('common/404.html');
    res.status(500).render("common/500.html");
});

app.listen(port,()=>{
    console.log("Express server on port 3000!");
});
