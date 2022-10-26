import "./datatable.scss";

import { userColumns, userRows } from "../../datatablesource";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const Datatable = () => {
	const [data, setData] = useState(userRows);
	const handleDelete = (id) => {
		setData(data.filter(item => item.id!== id))
	}
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 160,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test" style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">
				List of Users
				<Link to="/users/new" className="link">
					Create New User
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
