export const productColumns = [
	{ field: "ID", headerName: "Tracking ID", width: 140 },
	{
		field: "name",
		headerName: "Name",
		width: 200,
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
		field: "unitPrice",
		headerName: "UnitPrice",
		width: 120,
	},

	{
		field: "unitMeasurement",
		headerName: "UnitMeasurement",
		width: 160,
	},

	{
		field: "quantity",
		headerName: "Quantity",
		width: 120,
	},
	{
		field: "productionDate",
		headerName: "ProductionDate",
		width: 160,
	},
	{
		field: "expirationDate",
		headerName: "ExpirationDate",
		width: 160,
	},
	{
		field: "imageSource",
		headerName: "ImageSource",
		width: 120,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.imageSource} alt="avatar" />
				</div>
			);
		},
	},
	{
		field: "available",
		headerName: "Available",
		width: 120,
	},
];

//temporary data
export const productRows = [
	{
		ID: "ID1",
		name: "Acer Nitro 5",
		category: "Metal",
		origin: "USA",
		unitPrice: "$700",
		unitMeasurement: "10 Pounds",
		quantity: "50",
		productionDate: "1/10/2021",
		expirationDate: "2/9/2021",
		imageSource:
			"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
		available: true,
	},
	{
		ID: "ID2",
		name: "Playstation 5",
		category: "Diamond",
		origin: "Dubai",
		unitPrice: "$1500",
		unitMeasurement: "20 Pounds",
		quantity: "10",
		productionDate: "11/4/2022",
		expirationDate: "2/9/2022",
		imageSource:
			"https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
		available: false,
	},
	{
		ID: "ID3",
		name: "Redragon S101",
		category: "Silver",
		origin: "Canada",
		unitPrice: "$300",
		unitMeasurement: "8 Pounds",
		quantity: "40",
		productionDate: "11/2/2020",
		expirationDate: "22/2/2021",
		imageSource:
			"https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
		available: true,
	},
	{
		ID: "ID4",
		name: "Razer Blade 15",
		category: "Gold",
		origin: "VietNam",
		unitPrice: "$1000",
		unitMeasurement: "15 Pounds",
		quantity: "70",
		productionDate: "5/4/2019",
		expirationDate: "28/6/2021",
		imageSource:
			"https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
		available: true,
	},
	{
		ID: "ID5",
		name: "ASUS ROG Strix",
		category: "Iron",
		origin: "Australia",
		unitPrice: "$500",
		unitMeasurement: "13 Pounds",
		quantity: "20",
		productionDate: "25/11/2019",
		expirationDate: "28/12/2021",
		imageSource:
			"https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
		available: false,
	},
];
