import "./datatableproductsmanufacturer.scss";

import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { productColumns, productRows } from "../../datatableproductsource";

import { DataGrid } from "@mui/x-data-grid";
import EditForm from "../../pages/edit/EditForm";
import { Link } from "react-router-dom";

const DatatableProductsManufacturer = (manufacturer) => {
	const [data, setData] = useState(productRows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	useEffect(() => {
		handleClose();
	}, [manufacturer]);

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 160,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						{/* <Button className="editButton" onClick={handleShow}>
							Edit
						</Button> */}
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
				getRowId={(row) => row.ID}
				columns={productColumns.concat(actionColumn)}
				pageSize={11}
				rowsPerPageOptions={[11]}
				checkboxSelection
			/>
			<div className="container">
				<Modal
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={show}
					onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<EditForm props={manufacturer} />
					</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={handleClose}>
							Close Button
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};

export default DatatableProductsManufacturer;
