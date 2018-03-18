const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
let Spot = require('./spot');

let User = mongoose.Schema({
  email: String,
  password: String,
  mySpots: [Spot.schema],
  savedSpots: [Spot.schema]
});

User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);