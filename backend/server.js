const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DonorModel = require('./models/DonorModel');

const app = express();

// Middleware
app.use(cors({
	origin:"datta-mandir-frontend.vercel.app",
	methods: "GET,POST",
	credentials:true
}));
     // -> render app
    // origin: "https://datta-mandir-frontend.onrender.com", // Replace with your frontend URL
    // methods: "GET,POST",
    // credentials: true
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://sumitmali2002:Skms121524@cluster0.fd7sc.mongodb.net/donordb?retryWrites=true&w=majority&appName=Cluster0';
mongoose
	.connect(mongoURI)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error('MongoDB connection error:', err));

// Route for donors and also pagination
app.get('/getDonors', async (req, res) => {
	const { page = 1, limit = 10, search = '' } = req.query;
	const pageNumber = parseInt(page, 10);
	const limitNumber = parseInt(limit, 10);

	try {
		const query = search
			? { name: { $regex: search, $options: 'i' } } // Case-insensitive search
			: {};

		// Count documents only when pagination is used
		const totalCountPromise = DonorModel.countDocuments(query);

		// If searching, return all results (ignore pagination)
		// if (search) {
		// 	const donors = await DonorModel.find(query); // Get all matching donors
		// 	return res.json({ donors, totalCount: donors.length });
		// }

		// Optimize query using .lean() for faster performance
		const donorsPromise = DonorModel.find(query)
			.skip((pageNumber - 1) * limitNumber)
			.limit(limitNumber)
			.select('name amount village photo_url') // Fetch only required fields
			.lean(); // Convert Mongoose documents to plain JavaScript objects
		
		// // Otherwise, apply pagination
		// const totalCount = await DonorModel.countDocuments(query);
		// const donors = await DonorModel.find(query)
		// 	.skip((page - 1) * limit)
		// 	.limit(parseInt(limit));

		// Run both queries in parallel to reduce response time
		const [totalCount, donors] = await Promise.all([
			totalCountPromise,
			donorsPromise,
		]);

		res.json({ donors, totalCount });
	} catch (error) {
		res.status(500).send('Server Error');
	}
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
