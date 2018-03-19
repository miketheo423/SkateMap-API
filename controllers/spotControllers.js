var db = require('../models');
const axios = require('axios');


// Spots Feed (INDEX) 
module.exports.index = (req, res) => {
  db.Spot.find().exec((err, spots) => {
    if(err) return console.log("Error: " + err);
    res.json(spots);
  });
};

// Spot Page (SHOW)
module.exports.show = (req, res) => {
  db.Spot.findOne({_id: req.params.id}, (err, spot) => {
    if(err) return console.log('Error: ' + err);
    res.json(spot);
  });
};

// Spot CREATE
module.exports.create = (req, res) => {
  // Add the current userId to the new spot
  let newSpot = new db.Spot({
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    userId: req.body.userId,
    features: req.body.features,
    coordinate: req.body.coordinate
  });
  // Create the new spot
  newSpot.save((err, spot) => {
    if(err) return console.log("Error: " + err);
    res.json(spot);
  });
};

// Spot UPDATE
module.exports.edit = (req, res) => {
  db.Spot.findOne({_id: req.params.id}, (err, spot) => {
    if(err) {
      return console.log("Error: " + err);
    } else if(req.user === spot.userId) {
      console.log(spot);
      spot.name = req.body.name;
      spot.description = req.body.description;
      spot.images = req.body.images;
      spot.userId = req.body.userId;
      spot.features = req.body.features;
      spot.coordinate = req.body.coordinate;
      spot.save();
      res.json(spot);
      }
      console.log(req.user);
    res.send("You are not authorized to edit this spot.");
  });
};

// Spot DELETE
module.exports.delete = (req, res) => {
  db.Spot.findOneAndRemove({_id: req.params.id }, (err, deletedSpot) => {
    res.send("Spot was successfully deleted");
  });
};