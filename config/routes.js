const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const spotControllers = require('../controllers/spotControllers');

/** INDEX Route **/
router.route('/spots')
  .get(spotControllers.index);

/** SHOW Route **/
router.route('/spots/:id')
  .get(spotControllers.show);

/** CREATE Route **/
router.route('/spots')
  .post(spotControllers.create);

/** UPDATE Route **/
router.route('/spots/:id')
  .put(spotControllers.edit);

/** DELETE Route **/
router.route('/spots/:id')
  .delete(spotControllers.delete);



  module.exports = router;