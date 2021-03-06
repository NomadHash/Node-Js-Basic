const express = require('express');
const app = express();
const admin = require('./routes/admin');
const contacts = require('./routes/contacts');
const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello Express!");
});


app.use('/admin', admin);
app.use('/contacts', contacts) //라우트 미들웨어


app.listen(port,()=>{
    console.log("Express server on port 3000!");
});
