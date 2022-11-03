import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

export const ManufacturerContext = createContext();

const ManufacturerContextProvider = (props) => {
	const [manufacturers, setManufacturers] = useState([
		{
			id: uuidv4(),
			product: "Acer Nitro 5",
			img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
			category: "Metal",
			origin: "USA",
			price: "$700",
			measurement: "10 Pounds",
			quantity: "50",
		},
		{
			id: uuidv4(),
			product: "Playstation 5",
			img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
			category: "Diamond",
			origin: "Dubai",
			price: "$1500",
			measurement: "20 Pounds",
			quantity: "10",
		},
		{
			id: uuidv4(),
			product: "Redragon S101",
			img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
			category: "Silver",
			origin: "Canada",
			price: "$300",
			measurement: "8 Pounds",
			quantity: "40",
		},
		{
			id: uuidv4(),
			product: "Razer Blade 15",
			img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
			category: "Gold",
			origin: "VietNam",
			price: "$1000",
			measurement: "15 Pounds",
			quantity: "70",
		},
		{
			id: uuidv4(),
			product: "ASUS ROG Strix",
			img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
			category: "Iron",
			origin: "Australia",
			price: "$500",
			measurement: "13 Pounds",
			quantity: "20",
		},
	]);

	useEffect(() => {
		setManufacturers(JSON.parse(localStorage.getItem("manufacturers")));
	}, []);

	useEffect(() => {
		localStorage.setItem("manufacturers", JSON.stringify(manufacturers));
	});

	const sortedManufacturers = manufacturers.sort((a, b) =>
		a.product < b.product ? -1 : 1
	);

	const updateManufacturer = (id, updatedManufacturer) => {
		setManufacturers(
			manufacturers.map((manufacturer) =>
				manufacturer.id === id ? updatedManufacturer : manufacturer
			)
		);
	};

	return (
		<ManufacturerContext.Provider
			value={{
				sortedManufacturers,
				updateManufacturer,
			}}>
			{props.children}
		</ManufacturerContext.Provider>
	);
};

export default ManufacturerContextProvider;
