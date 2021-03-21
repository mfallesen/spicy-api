// =============
// Dependencies
// =============
const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../models');

// Register User
router.post('/registerUser', (req, res, next ) => { 

    passport.authenticate('register', (err, user, info ) => {
        console.log(info);
        if (err) {
            console.error('++++++++++++',err);
        }
        if (info !== undefined) {
            console.error("################",info.message);
            res.status(403).send(info.message);
        } else {
            req.logIn(user, error => {
                const data = {
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email
                };
                db.User.findOne({
                    where: {
                        username: data.username,
                    },
                }).then(user => {
                    user
                        .update({
                            name: data.name,
                            email: data.email,
                        })
                        .then(() => {
                            console.log('DATA NAME:', data.name);
                            console.log("user stored in DB");
                            res.status(200).send({message : 'user created'});
                        });
                });
            });
        }
    })(req, res, next);
});

module.exports = router
