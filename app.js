const express = require('express')

const app express();

//routes
app.get('/', (req,res) => {
    res.send('we are on home URL');
});

//how do we start listening to server
app.listen(3001);
