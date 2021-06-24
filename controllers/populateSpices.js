const express = require("express");
const router = express.Router();
const db = require("../models");


router.post('/populateSpices', async (req, res, next) => {
    // console.log("============================");
    // console.log(req.body)
    await db.spiceRack.findAll({
        where: {
            spiceId: req.body.id,
            userId: req.body.userId
        },
    })
        .then((spiceRack) => {

            console.log(spiceRack);

            res.status(200).send(spiceRack)

        })
        .catch((err) => {
            
            res.status(500).json(err, req);
        });

})


module.exports = router