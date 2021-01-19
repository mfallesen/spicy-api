const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/addSpice', (req, res, next) => {
            db.Spice.findOne({
                where: {
                    spice_name: req.body.spice_name,
                },
            }).then((spice) => {        
                if (!spice) {
                    db.Spice.create({
                        spice_name: req.body.spice_name,

                        brand: req.body.brand
                    });
                }
            }).then( () => {
                res.status(200);
            })
            .catch((err) => {
                console.error(err);  /******/
                res.status(500).json(err);
            });
    
});

module.exports = router