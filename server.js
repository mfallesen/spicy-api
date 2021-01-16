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

// ================
// Data Parsing
// ================
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// require("./auth/auth.js");

// Need Cors?


var PORT = process.env.PORT || 3030;

// ================
// Sequelize sync and start server
// ================

// Just start server for now wait till models are done. 
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("Server running on PORT " + PORT);
    });
});