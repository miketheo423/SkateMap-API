const express = require('express'),
      jwt     = require('express-jwt'),
      config  = require('../config')

const router = express.Router();
const spotControllers = require('../controllers/spotControllers');

// Validate access_token
var jwtCheck = jwt({
  secret: config.secret,
  audience: config.audience,
  issuer: config.issuer
});

// Check for scope
function requireScope(scope) {
  return function (req, res, next) {
    var has_scopes = req.user.scope === scope;
    if (!has_scopes) { 
        res.sendStatus(401); 
        return;
    }
    next();
  };
}

router.use('/protected', jwtCheck, requireScope('full_access'));

//////////////////////
//// SPOT ROUTES /////
//////////////////////

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

//////////////////////
//// USER ROUTES /////
//////////////////////

module.exports = router;