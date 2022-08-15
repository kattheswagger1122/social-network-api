const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

// import routes
const postRoutes = require('./routes/posts')

app.use('/posts', postsRoute);

//middlewares
// app.use('/posts', () => {
//     console.log('this is middleware running');
// });


//routes
router.get('/', (req,res) => {
    res.send('we are on home URL');
});

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log('connected to DB')
);

//how do we start listening to server
app.listen(3001);
