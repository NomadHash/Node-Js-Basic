const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello Express!");
});

app.get('/profile', (req, res) => { // URL + Callback 
    res.send("Profile page"); 
});

app.listen(port,()=>{
    console.log("Express server on port 3000!");
});
