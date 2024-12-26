const Ride = require('../models/ride');
const User = require('../models/user');

// Register User
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        // Check if the username (email) already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // If email is unique, create a new user
        const user = new User({ username, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during registration' });
    }
};

// List Rides
const listRides = async (req, res) => {
    try {
        const rides = await Ride.find();
        res.json(rides);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching rides' });
    }
};

// Ride Details
const rideDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const ride = await Ride.findOne({ rideID: id });
        if (!ride) {
            return res.status(404).json({ error: 'Ride not found' });
        }
        res.json(ride);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { registerUser, listRides, rideDetails };
