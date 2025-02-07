import React from 'react';
import NewDattaMandirImage from '../../src/assets/new-datta-mandir.jpeg';

// Table Data
const data1 = [
	{ id: 1, no: 1, item: 'गलता', size: '40 X 1400', cost: '56,000=00' },
	{ id: 2, no: 2, item: 'फाडी', size: '280 X 1400', cost: '1,12,000=00' },
	{ id: 3, no: 3, item: 'फुले', size: '5 X 2000', cost: '10,000=00' },
];

const data2 = [
	{ id: 1, no: 1, item: 'गलता', size: '180 X 1400', cost: '2,52,000=00' },
	{
		id: 2,
		no: 2,
		item: 'फाडी आत बाहेर',
		size: '2800 X 1400',
		cost: '11,20,000=00',
	},
	{
		id: 3,
		no: 3,
		item: 'आतील आताशी घुमट',
		size: '',
		cost: '2,00,000=00',
	},
	{ id: 4, no: 4, item: 'घोडे', size: '32 QTY. X 2000', cost: '64,000=00' },
	{ id: 5, no: 5, item: 'डबास', size: '40 X 1200', cost: '48,000=00' },
	{ id: 6, no: 6, item: 'चौकट गलथा', size: '', cost: '1,00,000=00' },
	{
		id: 7,
		no: 7,
		item: 'खिडकी',
		size: '2 X 15000',
		cost: '30,000=00',
	},
	{
		id: 8,
		no: 8,
		item: 'खिडकी कमान गलथा',
		size: '2 X 8000',
		cost: '16,000=00',
	},
	{ id: 9, no: 9, item: 'देवळी', size: '2 X 3000', cost: '6,000=00' },
	{ id: 10, no: 10, item: 'सिहांसन', size: '', cost: '1,00,000=00' },
	{ id: 11, no: 11, item: 'वाळू 2 ट्रक', size: '', cost: '80,000=00' },
	{ id: 12, no: 12, item: 'खडी 1 ट्रक', size: '', cost: '10,000=00' },
	{ id: 13, no: 13, item: 'सिमेंट', size: '300 X 360', cost: '1,08,000=00' },
];

const data3 = [
	{
		id: 1,
		item: 'चौथरा',
		cost: '1,78,000=00',
	},
	{
		id: 2,
		item: 'मंदिर',
		cost: '21,34,000=00',
	},
	{
		id: 3,
		item: 'इतर',
		cost: '1,88,000=00',
	},
	{
		id: 4,
		item: 'एकूण',
		cost: '25,00,000=00',
	},
];

const ConstructionEstimatePage = () => {
	return (
		<>
			<div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between px-6 md:px-16 py-4">
				<div className="md:w-2/3 ">
					<h1 className="text-center text-2xl font-bold my-4 text-orange-400">
						नविन दगडी बांधकाम व शिखर एस्टीमेट
					</h1>
					<p className="text-center text-xl font-bold text-red-600 my-4">
						Regd. No. A3457 BGM
					</p>
					<p className="text-gray-700 text-justify">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						बांधलेले जुने छोटे मंदिर जीर्ण झालेने ते उतरून त्या
						ठिकाणी काळ्या दगडांचे कलात्मक मंदिर व शिखर बांधकामाचा
						संकल्प सेवेकन्यांनी{' '}
						<b className="text-red-600">
							गुरुवार दि. 04-04-2024 रोजी{' '}
						</b>{' '}
						सोडला आहे. या कामासाठी एकूण खर्च अंदाजे{' '}
						<b className="text-red-600">25 लाख रूपये </b> इतका येणार
						आहे. ही रक्कम उभारणीसाठी सेवेकरी देणगीदारांकडून देणगी
						गोळा करणेचे काम सुरू असून यास चांगला प्रतिसाद मिळत आहे.
						काम लवकरच सुरू होणार असून पूर्णत्वाकडे जाणार असलेने
						सर्वांना विनंती आहे की आपली देणगी लवकरात लवकर इकडे जमा
						करून हाती घेतलेल्या कामास गती द्यावी हि विनंती.
					</p>
				</div>

				{/* New Datta Mandir Image */}
				<div className="flex flex-col justify-center md:justify-end mb-4 md:mb-0 gap-8 ">
					<figure>
						<img
							className="w-64 h-64 md:w-108 md:h-108 shadow-lg border-4 border-blue-800"
							src={NewDattaMandirImage}
							alt="New Datta Mandir Image"
						/>
						<figcaption className="text-center text-red-950 font-bold mt-2">
							नियोजित श्री दत्त दगडी नविन मंदिर{' '}
						</figcaption>
					</figure>
				</div>
			</div>

			{/* Construction Estimate Table  */}
			<div className="flex justify-center overflow-x-auto">
				<table className="table-auto border-collapse border border-black">
					<thead>
						<tr className="bg-red-600 text-white">
							<th>अ.नं.</th>
							<th className="border border-black px-4 py-2">
								तपशील{' '}
							</th>
							<th className="border border-black px-4 py-2">
								साईझ{' '}
							</th>
							<th className="border border-black px-4 py-2">
								रक्कम रु.{' '}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-yellow-200">
							<td
								colSpan={4}
								className="border border-black px-4 py-2 font-bold text-center text-xl">
								<span className="text-red-600 text-xl pr-2">
									चौथारा
								</span>
								10' X 10' X 1.1/2 X 3
							</td>
						</tr>

						{/* Map function for Data1 */}
						{data1.map((row1) => (
							<tr key={row1.id}>
								<td className="border border-black px-4 py-2 text-red-600 font-bold">
									{row1.no}
								</td>
								<td className="border border-black px-4 py-2 text-red-600 font-bold">
									{row1.item}
								</td>
								<td className="border border-black px-4 py-2 text-right font-bold">
									{row1.size}
								</td>
								<td className="border border-black px-4 py-2 text-right text-red-600 font-bold">
									{row1.cost}
								</td>
							</tr>
						))}

						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td className="border border-black px-4 py-2 text-right text-red-600 font-bold text-xl">
								1,78,000=00
							</td>
						</tr>

						<tr className="bg-yellow-200">
							<td
								colSpan={4}
								className="border border-black px-4 py-2 font-bold text-center text-xl">
								<span className="text-red-600 text-xl pr-2">
									मंदिर
								</span>
								9.1/2 X 9.1/2 X 11 उंची
							</td>
						</tr>

						{/* Map funtion for data2 */}
						{data2.map((row2) => (
							<tr key={row2.id}>
								<td className="border border-black px-4 py-2 text-red-600 font-bold">
									{row2.no}
								</td>
								<td className="border border-black px-4 py-2 text-red-600 font-bold">
									{row2.item}
								</td>
								<td className="border border-black px-4 py-2 text-right font-bold">
									{row2.size}
								</td>
								<td className="border border-black px-4 py-2 text-right text-red-600 font-bold">
									{row2.cost}
								</td>
							</tr>
						))}
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td className="border border-black px-4 py-2 text-right text-red-600 font-bold text-xl">
								23,12,000=00
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="flex justify-center mt-4 px-4 py-4">
				<table className="table-auto border-collapse border border-black">
					<tbody>
						{/* Map function for data3 */}
						{data3.map((row3) => (
							<tr key={row3.id}>
								<td className="border border-black px-4 py-2 font-bold text-red-600 text-xl font-bold">
									{row3.item}
								</td>
								<td className="border border-black px-4 py-2 text-right font-bold text-xl">
									{row3.cost}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ConstructionEstimatePage;
