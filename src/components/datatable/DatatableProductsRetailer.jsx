import "./datatableproduct.scss";

import { productColumns, productRows } from "../../datatableproductsource";

import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";

const DatatableProductsRetailer = () => {
	const [data] = useState(productRows);

	return (
		<div className="datatableproduct">
			<div className="datatableproductTitle">List of Products Of Retailer</div>
			<DataGrid
				className="datagrid"
				rows={data}
				getRowId={(row) => row.ID}
				columns={productColumns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DatatableProductsRetailer;
