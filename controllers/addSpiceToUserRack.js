const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/addSpiceToUserRack', (req, res, next) => {


    db.spiceRack.create({
        purchase_date: req.body.purchase_date,
        expiration_date: req.body.expiration_date,
        spiceId: req.body.spiceId,
        userId: req.body.userId
    }).then(() => {
        console.log("sent to user SPice Rack!");
        let message = `'Spice Entered into User ${req.body.userId}'s spice rack'`
        res.status(200).send(message);
    })
        .catch((err) => {
            console.error(err);  /******/
            res.status(500).json(err);
        });

});

module.exports = router