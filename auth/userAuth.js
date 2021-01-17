const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const BCRYPT_SALT_ROUNDS = 6;
const Op = Sequelize.Op;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const db = require('../models');
require('dotenv').config();

passport.use(
    'register',
    new LocalStrategy (
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true,
            session: false,
        },
        (req, username, password, done) => {
            // For Testing
            console.log(username);
            console.log(req.body.email);
            // Check to see if username or email is already registered
            try {
                db.User.findOne({
                    where: {
                        [Op.or]: [
                            {
                                username,
                            },
                            {email: req.body.email},
                        ],
                    },
                }).then(user => {
                    if (user != null) {
                        console.log("username or email already registered");
                        return done(null, false, {
                            message:'username or email already registered',
                        });
                    }
                    // Hashes password and adds user to db
                    bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then(hashedPassword => {
                        db.User.create({
                            username,
                            password: hashedPassword,
                            email: req.body.email,
                        }).then(user => {
                            console.log('user created and entered in db');
                            return done(null, user);
                        });
                    });
                });
            } catch (err) {
                return done(err);
            }
        },
    ),
);


// TODO: JWT AND LOGIN AUTHENTICATION