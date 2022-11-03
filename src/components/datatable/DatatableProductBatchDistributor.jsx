import "./datatableproductbatch.scss";

import {
	productbatchColumns,
	productbatchRows,
} from "../../datatableproductbatchsource";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

const DatatableProductBatchDistributor = () => {
	const [data, setData] = useState(productbatchRows);
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
		<div className="datatableproductbatch">
			<div className="datatableproductbatchTitle">
				List of Product Batch Of Distributor
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				getRowId={(row) => row.id}
				columns={productbatchColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DatatableProductBatchDistributor;
