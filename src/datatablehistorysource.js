export const historyColumns = [
	{ field: "id", headerName: "Tracking ID", width: 100 },
	{
		field: "product",
		headerName: "Product",
		width: 180,
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
		field: "manufacturerid",
		headerName: "Manufacturer ID",
		width: 130,
	},

	{
		field: "distributorid",
		headerName: "Distributor ID",
		width: 130,
	},

	{
		field: "retailerid",
		headerName: "Retailer ID",
		width: 130,
	},

	{
		field: "productiondate",
		headerName: "Production Date",
		width: 180,
	},

	{
		field: "expirationdate",
		headerName: "Expiration Date",
		width: 180,
	},

	{
		field: "locationentryinfo",
		headerName: "Location Entry Info",
		width: 160,
	},
];

//temporary data
export const historyRows = [
	{
		id: 1143155,
		product: "Acer Nitro 5",
		img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
		manufacturerid: "111111",
		distributorid: "222222",
		retailerid: "333333",
		productiondate: "1st March 2021",
		expirationdate: "1st January 2022",
		locationentryinfo: "USA",
	},

	{
		id: 2235235,
		product: "Playstation 5",
		img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
		manufacturerid: "123456",
		distributorid: "234567",
		retailerid: "345678",
		productiondate: "12nd February 2020",
		expirationdate: "23th September 2021",
		locationentryinfo: "Australia",
	},

	{
		id: 2342353,
		product: "Redragon S101",
		img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
		manufacturerid: "110501",
		distributorid: "010699",
		retailerid: "200199",
		productiondate: "13rd May 2019",
		expirationdate: "15th April 2021",
		locationentryinfo: "Brazil",
	},

	{
		id: 2357741,
		product: "Razer Blade 15",
		img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
		manufacturerid: "050403",
		distributorid: "020106",
		retailerid: "070809",
		productiondate: "25th December 2020",
		expirationdate: "19 November 2021",
		locationentryinfo: "VietNam",
	},

	{
		id: 2342355,
		product: "ASUS ROG Strix",
		img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
		manufacturerid: "747372",
		distributorid: "565758",
		retailerid: "939291",
		productiondate: "30th July 2019",
		expirationdate: "24th June 2021",
		locationentryinfo: "Canada",
	},
];
