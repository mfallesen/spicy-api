const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.send('Ready for things to get Spicy?')
})

router.use('/user', require('./registerUser'));



module.exports = router