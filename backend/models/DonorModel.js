const mongoose = require('mongoose');

// Donor Schema
const DonorSchema = new mongoose.Schema({
	name: String,
	village: String,
	phone: String,
	amount: String,
	photo_url: String,
});

// Donor Model
const DonorModel = mongoose.model('donors', DonorSchema);

module.exports = DonorModel;
