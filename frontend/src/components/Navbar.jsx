import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../src/assets/datta-image.jpg';

const Navbar = () => {
	return (
		<div className="flex flex-col justify-center items-center shadow-lg p-2">
			{/* Slogan  */}
			<marquee behavior="scroll" direction="left">
				<p className="text-sm sm:text-lg font-bold text-orange-400">
					!! दिगंबरा दिगंबरा श्रीपाद वल्लभ दिगंबरा !!
				</p>
			</marquee>

			{/* Logo and Heading */}
			<div className="flex flex-col items-center mt-2">
				<img
					className="w-16 h-24 sm:w-24 sm:h-32 object-cover"
					src={Logo}
					alt="Shree Gurudev Datta"
				/>
				<h1 className="text-xl sm:text-2xl font-bold sm:font-extrabold text-orange-400 text-center mt-2">
					श्री गुरुदेव दत्त
				</h1>
			</div>

			<div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-4 w-full">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`text-sm sm:text-lg font-bold relative ${
							isActive ? 'text-blue-800' : ''
						}`
					}>
					इतिहास
				</NavLink>

				<NavLink
					to="/constructionestimate"
					className={({ isActive }) =>
						`text-sm sm:text-lg font-bold relative ${
							isActive ? 'text-blue-800' : ''
						}`
					}>
					बांधकाम एस्टीमेट
				</NavLink>
				<NavLink
					to="/donor"
					className={({ isActive }) =>
						`text-sm sm:text-lg font-bold relative ${
							isActive ? 'text-blue-800' : ''
						}`
					}>
					देणगीदारांची नावे
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
