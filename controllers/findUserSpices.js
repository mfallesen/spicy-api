const express = require("express");
const router = express.Router();
const db = require("../models");


router.post('/findUserSpices', async (req, res, next) => {
    console.log(req.body);
    await db.spiceRack.findAll({
        where: {
            userId: req.body.userId
        },
    })
        .then((spiceRack) => {

            let idSpice = [];

            spiceRack.forEach(element => {
                idSpice.push(element.dataValues.spiceId);
            });

            // Return just the SPice ID's to User and use another call to access the spices themselves
            res.status(200).send(idSpice)

        })
        .catch((err) => {
            
            res.status(500).json(err);
        });

})


module.exports = router