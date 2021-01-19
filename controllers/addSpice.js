const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/addSpice', (req, res, next) => {
    // console.log("Console request: ", req);
            db.Spice.findOne({
                where: {
                    spice_name: req.body.spice_name,
                    brand: req.body.brand
                },
            }).then((spice) => { 
                console.log(spice);       
                if (!spice) {
                    db.Spice.create({
                        spice_name: req.body.spice_name,

                        brand: req.body.brand
                    });
                    return message = 'Spice Entered into DB'
                } else {
                    return message = "Spice already exists in DB"
                }
            }).then( () => {
                console.log("sent!");
                res.status(200).send(message);
            })
            .catch((err) => {
                console.error(err);  /******/
                res.status(500).json(err);
            });
    
});

module.exports = router