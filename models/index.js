const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/skate-map");


module.exports.User = require('./user');
module.exports.Spot = require('./spot.js');