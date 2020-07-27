const express = require('express');
const router = express.Router();// 라우터 분리 시 express의 router메서드 사용.

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

function firstMiddleWare(req,res,next){
    console.log("First");
    next();
};

function secondMiddleWare(req,res,next){
    console.log("Second");
    next();
};


router.get("/", firstMiddleWare,secondMiddleWare, (req, res) => {//'해당 url 요청시 firstMiddleWare, secondMiddleWare 함수를 거친 후 "admin page 응답.
  res.send("admin page");
});

router.get('/products', (req, res) => {
    res.render('admin/products.html',{//main.js 에서 지정한 template폴더 이후의 경로.
        message :  `<h1>hello nunjucks!</h1>`,
        online : 'express'
    });
});

router.get('/products/write',(req,res)=>{
    res.render('admin/write.html')
});

router.post("/products/write", (req, res) => {//write 페이지 에서 port 요청이 발생한다면.
  res.send(req.body.name);
});
module.exports = router;