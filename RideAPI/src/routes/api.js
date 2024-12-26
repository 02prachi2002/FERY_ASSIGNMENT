const express = require('express');
const { registerUser, listRides, rideDetails } = require('../controllers/rideController');

const router = express.Router();

router.post('/register', registerUser);
router.get('/rides', listRides);
router.get('/rides/:id', rideDetails);

module.exports = router;
