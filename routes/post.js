const express =  require('express');

const router = express.Router();

//post 
router.get('/', (req,res) => {
    res.send('we are on posts URL');
});



module.exports = router;
