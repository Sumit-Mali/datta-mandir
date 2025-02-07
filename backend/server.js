const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DonorModel = require('./models/DonorModel');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb://127.0.0.1:27017/donordb';
mongoose
	.connect(mongoURI)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error('MongoDB connection error:', err));

// Route for donors and also pagination
app.get('/getDonors', async (req, res) => {
	const { page = 1, limit = 12, search = '' } = req.query;

	try {
		const query = search
			? { name: { $regex: search, $options: 'i' } } // Case-insensitive search
			: {};

		// If searching, return all results (ignore pagination)
		if (search) {
			const donors = await DonorModel.find(query); // Get all matching donors
			return res.json({ donors, totalCount: donors.length });
		}

		// Otherwise, apply pagination
		const totalCount = await DonorModel.countDocuments(query);
		const donors = await DonorModel.find(query)
			.skip((page - 1) * limit)
			.limit(parseInt(limit));

		res.json({ donors, totalCount });
	} catch (error) {
		res.status(500).send('Server Error');
	}
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
