const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/removeSpiceFromUser', (req, res) => {
    db.spiceRack.destroy({
        where: {
            id: req.body.spiceId,
            userId: req.body.userId
        },
    }).then(() => {
        let message = "Entry deleted from User Rack"
        console.log(message);
        res.status(200).send(message);
    }).catch((err) => {
        console.error(err);  /******/
        res.status(500).json(err);
    });
});

module.exports = router