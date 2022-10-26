export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "role",
		headerName: "Role",
		width: 120,
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Distributor",
	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Manufacturer",
	},
	{
		id: 3,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Distributor",
	},
	{
		id: 4,
		username: "Stark",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Manufacturer",
	},
	{
		id: 5,
		username: "Targaryen",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Retailer",
	},
	{
		id: 6,
		username: "Melisandre",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Retailer",
	},
	{
		id: 7,
		username: "Clifford",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Distributor",
	},
	{
		id: 8,
		username: "Frances",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Manufacturer",
	},
	{
		id: 9,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Distributor",
	},
	{
		id: 10,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		role: "Retailer",
	},
];
