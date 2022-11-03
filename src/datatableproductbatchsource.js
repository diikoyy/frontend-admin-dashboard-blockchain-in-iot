export const productbatchColumns = [
	{ field: "id", headerName: "Tracking ID", width: 100 },
	{
		field: "products",
		headerName: "Products",
		width: 150,
	},
	{
		field: "manufacturerID",
		headerName: "Manufacturer ID",
		width: 130,
	},

	{
		field: "distributorID",
		headerName: "Distributor ID",
		width: 130,
	},

	{
		field: "retailerID",
		headerName: "Retailer ID",
		width: 130,
	},

	{
		field: "currentLocation",
		headerName: "Current Location",
		width: 150,
	},

	{
		field: "destination",
		headerName: "Destination",
		width: 120,
	},

	{
		field: "ArrivalTimestamp",
		headerName: "Arrival Timestamp",
		width: 160,
	},
	{
		field: "status",
		headerName: "Status",
		width: 120,
	},
];

//temporary data
export const productbatchRows = [
	{
		id: "ID1",
		products: "Acer Nitro 5",
		manufacturerID: "ID1",
		distributorID: "ID2",
		retailerID: "ID3",
		currentLocation: "VietNam",
		destination: "USA",
		ArrivalTimestamp: "1/10/2021",
		status: "Approved",
	},

	{
		id: "ID2",
		products: "Playstation 5",
		manufacturerID: "ID1",
		distributorID: "ID2",
		retailerID: "ID3",
		currentLocation: "Canada",
		destination: "Australia",
		ArrivalTimestamp: "21/7/2022",
		status: "Pending",
	},

	{
		id: "ID3",
		products: "Redragon S101",
		manufacturerID: "ID1",
		distributorID: "ID2",
		retailerID: "ID3",
		currentLocation: "Brazil",
		destination: "UK",
		ArrivalTimestamp: "13/4/2021",
		status: "Denied",
	},

	{
		id: "ID4",
		products: "Razer Blade 15",
		manufacturerID: "ID1",
		distributorID: "ID2",
		retailerID: "ID3",
		currentLocation: "German",
		destination: "Italy",
		ArrivalTimestamp: "15/4/2020",
		status: "Pending",
	},

	{
		id: "ID5",
		products: "ASUS ROG Strix",
		manufacturerID: "ID1",
		distributorID: "ID2",
		retailerID: "ID3",
		currentLocation: "France",
		destination: "Dubai",
		ArrivalTimestamp: "17/9/2018",
		status: "Approved",
	},
];
