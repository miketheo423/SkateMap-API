const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const spotControllers = require('../controllers/spotControllers');

router.route('/spots')
  .get(spotControllers.index);



  module.exports = router;