const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const db = require("../models");

router.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, users, info) => {
        if (err) {
            console.error('Error: ', err);
        }
        if (info !== undefined) {
            console.error(info.message);
            if (info.message === 'bad username') {
                res.status(401).send(info.message);
            } else {
                res.status(403).send(info.message);
            }
        } else {
            req.login(users, () => {
                db.User.findOne({
                    where: {
                        username: req.body.username,
                    },
                }).then(user => {
                    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                        expiresIn: 60 * 60,
                    });

                    
                    const id = user.id;
                    const name = user.name;
                    const userName = user.username;
                    res.status(200).send({
                        auth: true,
                        id,
                        token,
                        user,
                        userName,
                        message: 'User Found and Logged In'
                    });
                });
            });
        }
    })(req, res, next);
});

module.exports = router