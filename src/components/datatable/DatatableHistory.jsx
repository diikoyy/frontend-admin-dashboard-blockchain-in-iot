import "./datatablehistory.scss";

import { historyColumns, historyRows } from "../../datatablehistorysource";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const DatatableHistory = () => {
	const [data, setData] = useState(historyRows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 160,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/history/test" style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatablehistory">
			<div className="datatablehistoryTitle">
				List of History
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={historyColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DatatableHistory;
