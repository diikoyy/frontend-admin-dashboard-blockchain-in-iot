export const productColumns = [
	{ field: "id", headerName: "Tracking ID", width: 140 },
	{
		field: "product",
		headerName: "Product",
		width: 200,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.product}
				</div>
			);
		},
	},
	{
		field: "category",
		headerName: "Category",
		width: 120,
	},

	{
		field: "origin",
		headerName: "Origin",
		width: 120,
	},

	{
		field: "price",
		headerName: "Price",
		width: 120,
	},

	{
		field: "measurement",
		headerName: "Unit Measurement",
		width: 160,
	},

	{
		field: "quantity",
		headerName: "Quantity",
		width: 120,
	},
];

//temporary data
export const productRows = [
	{
		id: 1143155,
		product: "Acer Nitro 5",
		img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
		category: "Metal",
		origin: "USA",
		price: "$700",
		measurement: "10 Pounds",
		quantity: "50",
	},
	{
		id: 2235235,
		product: "Playstation 5",
		img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
		category: "Diamond",
		origin: "Dubai",
		price: "$1500",
		measurement: "20 Pounds",
		quantity: "10",
	},
	{
		id: 2342353,
		product: "Redragon S101",
		img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
		category: "Silver",
		origin: "Canada",
		price: "$300",
		measurement: "8 Pounds",
		quantity: "40",
	},
	{
		id: 2357741,
		product: "Razer Blade 15",
		img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
		category: "Gold",
		origin: "VietNam",
		price: "$1000",
		measurement: "15 Pounds",
		quantity: "70",
	},
	{
		id: 2342355,
		product: "ASUS ROG Strix",
		img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
		category: "Iron",
		origin: "Australia",
		price: "$500",
		measurement: "13 Pounds",
		quantity: "20",
	},
];
