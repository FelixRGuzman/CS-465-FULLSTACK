const express = require("express");
const router = express.Router();

// This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

const authController = require("../controllers/authentication");

const authenticateJWT = (req, res, next) => {
    // This is a temporary placeholder.
    next(); 
};

// define route for our trips endpoint

router.route("/register").post(authController.register);

// define route for login endpoint
router
.route('/login')
.post(authController.login);


router

    .route('/trips')
    .get(tripsController.tripsList) // GET method routes tripList
 // .post(tripsController.tripsAddTrip); // POST method Adds a trip
    .post(authenticateJWT, tripsController.tripsAddTrip);

// GET method routes tripsFindByCode

router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode) 
    .put(authenticateJWT,tripsController.tripsUpdateTrip);


module.exports = router;
