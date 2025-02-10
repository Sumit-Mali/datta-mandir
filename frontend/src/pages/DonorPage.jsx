import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const DonorPage = () => {
	const [donors, setDonors] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState('');
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	// render backend url
	// https://datta-mandir-backend-ohua.onrender.com

	// ✅ Debounce search input (wait 500ms before calling API)
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(searchTerm);
		}, 500); // Wait 500ms before updating debounced search

		return () => clearTimeout(handler); // Cleanup timeout on re-render
	}, [searchTerm]);

	useEffect(() => {
		const fetchDonors = async () => {
			try {
				const response = await axios.get(
					` https://datta-mandir-backend-ohua.onrender.com/getDonors?page=${
						debouncedSearch ? 1 : page
					}&limit=10&search=${debouncedSearch}&t=${Date.now()}`
				);
				setDonors(response.data.donors);
				setTotalPages(Math.ceil(response.data.totalCount / 10));
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

	// 	fetchDonors();
	// }, [page, searchTerm]); // Fetch new data when page or searchTerm changes

	// // Filter donors based on the search term
	// const filteredDonors = donors.filter((donor) => {
	// 	return donor.name.toLowerCase().includes(searchTerm.toLowerCase());
	// });
	if (debouncedSearch || page) fetchDonors(); // ✅ Only fetch if search or page changes
	}, [page, debouncedSearch]); // Fetch new data when page or searchTerm changes

	return (
		<div className="p-4">
			<p className="text-center text-xl font-bold text-red-600 my-4">
				नवीन दत्त मंदिर बांधकामासाठी देणगी दिलेल्या सर्व भाविक भक्तांचे
				श्री दत्त सेवा मंडळ, कुर्ली यांच्या वतीने हार्दिक आभार !
			</p>
			{/* Search Input */}
			<div className="mb-4 flex items-center justify-center">
				<FaSearch className="text-gray-500 absolute left-6 md:left-110" />
				<input
					type="text"
					placeholder="देणगीदारांचे नाव शोधण्यासाठी मराठी मध्ये टाईप करा..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="w-2xl p-2 pl-7 md:pl-10 border rounded-4xl shadow-sm"
				/>
			</div>

			{/* Donor Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-2 md:gap-4">
				{filteredDonors.length > 0 ? (
					filteredDonors.map((donor) => (
						<div
							key={donor._id}
							className="w-80 border rounded-lg p-2 shadow-lg bg-[#F4EEDC]">
							<div className="w-full h-40 flex items-center justify-center bg-gray-200">
								<img
									src={donor.photo_url}
									alt={donor.name}
									className="max-w-full max-h-full object-contain"
								/>
							</div>
							<div className="p-2">
								<h4 className="text-md font-bold">
									{donor.name}
								</h4>
								<p className="text-gray-600">{donor.village}</p>
								<h4 className="text-md text-gray-800 font-semibold">
									₹ {donor.amount}
								</h4>
							</div>
						</div>
					))
				) : (
					<p className="col-span-4 text-gray-600">
						देणगीदाराचे नाव अस्तित्वात नाही{' '}
					</p>
				)}
			</div>

			{/* Pagination Buttons */}
			{!searchTerm && (
				<div className="flex justify-center w-full mt-4">
					<button
						onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
						disabled={page === 1}
						className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg mr-2 cursor-pointer ${
							page === 1
								? 'bg-gray-300'
								: 'bg-blue-500 text-white'
						}`}>
						Previous
					</button>
					<button
						onClick={() => setPage((prev) => prev + 1)}
						disabled={page >= totalPages}
						className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg cursor-pointer ${
							page >= totalPages
								? 'bg-gray-300'
								: 'bg-blue-500 text-white'
						}`}>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default DonorPage;
