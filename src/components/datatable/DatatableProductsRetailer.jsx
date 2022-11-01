import "./datatableproduct.scss";

import { productColumns, productRows } from "../../datatableproductsource";

import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";

const DatatableProductsRetailer = () => {
	const [data] = useState(productRows);
	const statusColumn = [
		{
			field: "status",
			headerName: "Status",
			width: 160,
			renderCell: (params) => {
				return (
					<div>
						<div className="cellWithStatus">
							<span
								className={`status ${params.row.status} `}>
								{params.row.status}
							</span>
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatableproduct">
			<div className="datatableproductTitle">List of Products Of Retailer</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={productColumns.concat(statusColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DatatableProductsRetailer;
