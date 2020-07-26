const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("contact page")
});

router.get('/list', (req, res) => {
    res.send("contact list page")
});

module.exports = router;

