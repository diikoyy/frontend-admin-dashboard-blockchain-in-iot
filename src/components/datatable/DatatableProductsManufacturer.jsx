import "./datatableproduct.scss";

import { productColumns, productRows } from "../../datatableproductsource";

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { EditProductManufacturer } from "../../pages/edit/EditProductManufacturer";
import { Button } from "react-bootstrap";

const DatatableProductsManufacturer = () => {
	const [data, setData] = useState(productRows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

const handleEdit = (
		id,
		product,
		category,
		origin,
		price,
		measurement,
		quantity
) => {
		setData(data.map((item) => item.id === id));
		setData(data.map((item) => item.product === product));
		setData(data.map((item) => item.category === category));
		setData(data.map((item) => item.origin === origin));
		setData(data.map((item) => item.price === price));
		setData(data.map((item) => item.measurement === measurement));
		setData(data.map((item) => item.quantity === quantity));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 160,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link
							to="/manufacturer/editproduct"
							style={{ textDecoration: "none" }}>
							<Button
								className="editButton"
								onClick={() =>
									handleEdit(

										params.id,
										params.product,
										params.category,
										params.origin,
										params.price,
										params.measurement,
										params.quantity
									)
								}>
								Edit
							</Button>
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
		<div className="datatableproduct">
			<div className="datatableproductTitle">
				List of Products Of Manufacturer
				<Link to="/manufacturer/newproduct" className="link">
					Create New Product
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={productColumns.concat(actionColumn)}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
};

export default DatatableProductsManufacturer;
