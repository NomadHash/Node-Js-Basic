const express = require('express');
const router = express.Router();// 라우터 분리 시 express의 router메서드 사용.



router.get('/', (req, res) => {
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