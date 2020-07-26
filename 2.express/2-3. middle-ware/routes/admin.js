const express = require('express');
const router = express.Router();// 라우터 분리 시 express의 router메서드 사용.

function firstMiddleWare(req,res,next){
    console.log("첫번째 미들웨어");
    next();
};

function secondMiddleWare(req,res,next){
    console.log("두번째 미들웨어");
    next();
};


//ex)1
/*
function loginRequired(req,res,next){
    if(login != true){
        res.redirect(로그인 페이지로)
    }else{
        next();
    }
};
router.get("/", loginRequired, (req, res) => {//'/admin이동후 loginRequired에서 login이 ture일 시에만 response해주기.
  res.send("admin page");
});
*/




router.get("/", firstMiddleWare,secondMiddleWare, (req, res) => {//'/admin이동후 firstMiddleWare실행 후 secondMiddleWare 거친 후 send해주기.
  res.send("admin page");
});

router.get('/products', (req, res) => {
    res.render('admin/products.html',{//main.js 에서 지정한 template폴더 이후의 경로.
        message :  `<h1>hello nunjucks!</h1>`,
        online : 'express'
    });
});

router.get('/profile', (req, res) => {
    res.send("admin profile");
});


module.exports = router;