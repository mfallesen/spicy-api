const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/findIndividualSpiceInfo', async (req, res, next) => {
    console.log('hitting route');
    console.log(req.body.id)

    await db.Spice.findAll({
        where: {
            id: req.body.id
        },
    })
        .then((spice) => {
            console.log(spice)
            res.status(200).json(spice)
        })
        .catch((err) => {
            res.status(500).json(err, req);
        })
})

module.exports = router;