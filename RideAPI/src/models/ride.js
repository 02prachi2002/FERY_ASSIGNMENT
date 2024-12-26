const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    rideID: { type: String, required: true },
    distance: { type: Number, required: true },
    fare: { type: Number, required: true },
    details: { type: String },
});

module.exports = mongoose.model('Ride', rideSchema);
