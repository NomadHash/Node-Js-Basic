const express = require('express');
const router = express.Router();// 라우터 분리 시 express의 router메서드 사용.


router.get('/', (req, res) => {
    res.send("admin page");
});

router.get('/products', (req, res) => {
    res.send("admin products");
});

router.get('/profile', (req, res) => {
    res.send("admin profile");
});


module.exports = router;