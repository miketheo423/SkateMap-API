const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const spotControllers = require('../controllers/spotControllers');

/** INDEX route **/
router.route('/spots')
  .get(spotControllers.index);

/** SHOW Route **/
router.route('/spots/:id')
  .get(spotControllers.show);




  module.exports = router;