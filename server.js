// ================
// Dependencies
// ================
const express = require('express');
const Cors = require('cors')
const passport = require('passport');
const helmet = require('helmet');
const db = require("./models");
const bodyParser = require('body-parser')


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

require("./auth/userAuth.js");

app.use(helmet());
app.use(passport.initialize());

// CORS requests
app.use(Cors({
    origin:["http://localhost:3000"],
}))



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