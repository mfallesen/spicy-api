// ================
// Dependencies
// ================
const express = require('express');
const passport = require('passport');
const helmet = require('helmet');
const db = require("./models");


const app = express();
require('dotenv').config();

// ================
// Static Directory
// ================
app.use(express.static(--__dirname + '/public'));
app.use(express.json());

// ================
// Data Parsing
// ================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./auth/userAuth.js");

app.use(helmet());
app.use(passport.initialize());


// Need Cors?
const allRoutes = require('./controllers');
app.use('/', allRoutes);

var PORT = process.env.PORT || 3030;

// ================
// Sequelize sync and start server
// ================

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("Server running on PORT " + PORT);
    });
});