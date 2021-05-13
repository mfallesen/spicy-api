const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/addSpice', async (req, res, next) => {
    let message;
    // console.log("Console request: ", req);
            await db.Spice.findOne({
                where: {
                    spice_name: req.body.spice_name,
                    brand: req.body.brand
                },
            }).then( async (result) => { 
                // console.log('+++++++++++++++++++')
                // console.log(result);       
                // console.log('+++++++++++++++++++')
                if (!result) {
                    await db.Spice.create({
                        spice_name: req.body.spice_name,
                        brand: req.body.brand
                    }).then((spiceAdded) =>{ 
                        // spiceAdded = db.Spice.findOne({
                        //     where: {
                        //         spice_name: req.body.spice_name,
                        //         brand: req.body.brand
                        //     }
                        // })
                        // console.log('===========');
                        // console.log(spiceAdded)
                        // console.log('===========');
                        message = spiceAdded.dataValues.id;
                    })   
                } else {
                    console.log(result.id)
                    message = result.id
                }
            })
            .catch((err) => {
                console.error(err);  /******/
                res.status(500).json(err);
            })
            .finally( () => {
                console.log("sent!", message);
                res.status(200).json(message);
            });
    
});

module.exports = router