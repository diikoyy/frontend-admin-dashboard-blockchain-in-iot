import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import React, { Component } from "react";

export class EditProductManufacturer extends Component {
	constructor(props) {
		super(props);
		this.state = { productmanufacturer: [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		// fetch("http://localhost:5000/api/classroom_attendance", {
		// 	method: "PUT",
		// 	headers: {
		// 		Accept: "*/*",
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		Number: event.target.Number.value,
		// 		StudentID: event.target.StudentID.value,
		// 		ModuleID: event.target.ModuleID.value,
		// 		DateOfAttendance: event.target.DateOfAttendance.value,
		// 	}),
		// })
		// 	.then((res) => res.json())
		// 	.then(
		// 		(result) => {
		// 			alert(result);
		// 		},
		// 		(error) => {
		// 			alert("Failed!");
		// 		}
		// 	);
	}
	render() {
		return (
			<div className="container">
				<Modal
					{...this.props}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Edit Product Of Manufacturer
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Row>
							<Col sm={6}>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId="id">
										<Form.Label>Id</Form.Label>
										<Form.Control
											type="text"
											name="id"
											required
											defaultValue={this.props.productmanufacturerid}
											placeholder="id"
										/>
									</Form.Group>

									<Form.Group controlId="product">
										<Form.Label>Product</Form.Label>
										<Form.Control
											type="text"
											name="product"
											required
											defaultValue={this.props.productmanufacturerproduct}
											placeholder="product"
										/>
									</Form.Group>

									<Form.Group controlId="category">
										<Form.Label>Category</Form.Label>
										<Form.Control
											type="text"
											name="category"
											required
											defaultValue={this.props.productmanufacturercategory}
											placeholder="category"
										/>
									</Form.Group>

									<Form.Group controlId="origin">
										<Form.Label>Origin</Form.Label>
										<Form.Control
											type="text"
											name="origin"
											required
											defaultValue={this.props.productmanufacturerorigin}
											placeholder="origin"
										/>
									</Form.Group>
									<Form.Group controlId="price">
										<Form.Label>Price</Form.Label>
										<Form.Control
											type="text"
											name="price"
											required
											defaultValue={this.props.productmanufacturerprice}
											placeholder="price"
										/>
									</Form.Group>
									<Form.Group controlId="measurement">
										<Form.Label>Measurement</Form.Label>
										<Form.Control
											type="text"
											name="measurement"
											required
											defaultValue={this.props.productmanufacturermeasurement}
											placeholder="measurement"
										/>
									</Form.Group>
									<Form.Group controlId="quantity">
										<Form.Label>Quantity</Form.Label>
										<Form.Control
											type="text"
											name="quantity"
											required
											defaultValue={this.props.productmanufacturerquantity}
											placeholder="quantity"
										/>
									</Form.Group>

									<Form.Group>
										<Button variant="primary" type="submit">
											Update Attendance
										</Button>
									</Form.Group>
								</Form>
							</Col>
						</Row>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="danger" onClick={this.props.onHide}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
