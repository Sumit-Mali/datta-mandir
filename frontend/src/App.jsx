import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonorPage from './pages/DonorPage';
import HistoryPage from './pages/HistoryPage';
import ConstructionEstimatePage from './pages/ConstructionEstimatePage';
import Footer from './components/Footer';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				{/* Route for History page ==== Home Page  */}
				<Route path="/" element={<HistoryPage />} />
				{/* Route for Construction Estimate Page */}
				<Route
					path="/constructionestimate"
					element={<ConstructionEstimatePage />}
				/>
				{/* Route for Doner page */}
				<Route path="/donor" element={<DonorPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
