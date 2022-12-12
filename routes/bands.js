const express = require("express");
const bandSchema = require("../models/bands");
const router = express.Router();

// create band
router.post("/bands", (req, res) => {
    const band = bandSchema(req.body);
    band
        .save()
        .then((data) =>  res.json(data))
        .catch((error) => res.json({ message: error}))
});

//get all bands
router.get("/bands", (req, res) => {
    bandSchema
        .find()
        .then((data) =>  res.json(data))
        .catch((error) => res.json({ message: error}))

});

// get a band
router.get("/bands/:id", (req, res) => {
    const {id} = req.params;
    bandSchema
        .findById(id)
        .then((data) =>  res.json(data))
        .catch((error) => res.json({ message: error}))

});

// update a band
router.put("/bands/:id", (req, res) => {
    const {id} = req.params;
    const {band, album, year, genre} = req.body;
    bandSchema
        .updateOne({ _id: id }, {$set: {band, album, year, genre} } )
        .then((data) =>  res.json(data))
        .catch((error) => res.json({ message: error}))

});

// delete a band
router.delete("/bands/:id", (req, res) => {
    const {id} = req.params;
    const {band, album, year, genre} = req.body;
    bandSchema
        .remove({ _id: id })
        .then((data) =>  res.json(data))
        .catch((error) => res.json({ message: error}))

});
module.exports = router;