const mongoose = require('mongoose');

let SpotSchema = mongoose.Schema({
  id: String,
  name: String,
  descriptions: String,
  images: Array,
  userId: String,
  features: Array,
  coordinate: {
    latitude: Number,
    longitude: Number
  }
});

let Spot = mongoose.model('Spot', SpotSchema);

module.exports = Spot;