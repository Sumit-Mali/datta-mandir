import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<div className="flex flex-col justify-between shadow-[0_-10px_50px_1px_rgba(0,0,0,0.25)] p-2 md:px-16 md:pb-8 mt-4 overflow-hidden">
				<h1 className="text-xl sm:text-2xl font-bold sm:font-extrabold text-orange-400 text-center mt-2">
					श्री दत्त सेवा मंडळ, कुर्ली
				</h1>
				<span className="text-orange-400 text-center">
					ता. निपाणी , जि. बेळगावी
				</span>

				{/* Flexbox applied here to align child divs in one line */}
				<div className="mt-4 flex flex-col md:flex-row justify-between items-center md:items-start">
					{/* Contact Info */}
					<div className="md:w-1/2">
						<p className="font-bold md:text-base mb-1 md:mb-2">
							अधिक माहितीसाठी संपर्क :-
						</p>
						<ul className="font-bold">
							<li className="mb-0 md:mb-1">
								1. संदीप पोवार - 9657264915
							</li>
							<li>2. धिरज कुंभार - 8408099980</li>
						</ul>
					</div>

					{/* WhatsApp Group Info */}
					<div className="md:w-1/2 text-center mt-4 md:mt-0">
						<p className="font-bold md:text-base mt-1 md:mt-2 text-center">
							मंदिरामध्ये होत असणाऱ्या दैनंदिन कामांच्या अपडेटसाठी
							खाली दिलेल्या व्हॉटसॅप ग्रुपमध्ये सामील व्हा.
						</p>
						<a
							href="https://chat.whatsapp.com/C87SYV7v00tGKlZfykPBxY"
							className="inline-block ">
							<button className="flex items-center justify-center gap-2 font-bold text-md text-white bg-blue-500 px-4 py-2 border-0 rounded-full mt-2 cursor-pointer">
								<FaWhatsapp className="text-xl" />
								व्हॉटसॅप ग्रुप - श्री दत्त सेवा मंडळ, कुर्ली
							</button>
						</a>
					</div>
				</div>
			</div>

			<div className="p-2 mt-2 text-center font-bold">
				Designed By Sumit Maruti Mali
			</div>
		</>
	);
};

export default Footer;
