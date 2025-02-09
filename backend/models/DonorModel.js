const mongoose = require('mongoose');

// Donor Schema
const DonorSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true }, 
    amount: { type: String, required: true },
    village: String,
    photo_url: String
});

// Donor Model
const DonorModel = mongoose.model('donors', DonorSchema);

module.exports = DonorModel;
