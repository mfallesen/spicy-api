const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.send('Ready for things to get Spicy?')
})

router.use('/user', require('./registerUser'));
router.use('/user', require('./loginUser'));
router.use('/user', require('./addSpice'));
router.use('/user', require('./addSpiceToUserRack'));
router.use('/user', require('./removeSpiceFromUser'));


module.exports = router