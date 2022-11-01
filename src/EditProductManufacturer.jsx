import "./editproductmanufacturer.scss";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productRows } from "./datatableproductsource";
import { Form, Button } from "react-bootstrap";
import SidebarManufacturer from "./components/sidebar/SidebarManufacturer";
import NavbarManufacturer from "./components/navbar/NavbarManufacturer";

function EditFormManufacturer() {
	const [id, setId] = useState("");
	const [product, setProduct] = useState("");
	const [img, setImg] = useState("");
	const [category, setCategory] = useState("");
	const [origin, setOrigin] = useState("");
	const [price, setPrice] = useState("");
	const [measurement, setMeasurement] = useState("");
	const [quantity, setQuantity] = useState("");

	let history = useNavigate();

	var index = productRows
		.map(function (e) {
			return e.id;
		})
		.indexOf(id);

	const handleSubmit = (e) => {
		e.preventDefault();

		let a = productRows[index];
		a.id = id;
		a.product = product;
		a.img = img;
		a.category = category;
		a.origin = origin;
		a.price = price;
		a.measurement = measurement;
		a.quantity = quantity;

		history("/manufacturer");
	};

	useEffect(() => {
		setId(localStorage.getItem("id"));
		setProduct(localStorage.getItem("product"));
		setImg(localStorage.getItem("img"));
		setCategory(localStorage.getItem("category"));
		setOrigin(localStorage.getItem("origin"));
		setPrice(localStorage.getItem("price"));
		setMeasurement(localStorage.getItem("measurement"));
		setQuantity(localStorage.getItem("quantity"));
	}, []);

	return (
		<div className="editproductmanufacturer">
			<SidebarManufacturer />
			<div className="editproductmanufacturerContainer">
				<NavbarManufacturer />
				<Form className="forms">
					<Form.Group className="form" controlID="formId">
						<Form.Control
							type="text"
							placeholder="Enter Id"
							value={id}
							required
							onChange={(e) => setId(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group className="form" controlID="formProduct">
						<Form.Control
							type="text"
							placeholder="Enter Product"
							value={product}
							required
							onChange={(e) => setProduct(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group className="form" controlID="formCategory">
						<Form.Control
							type="text"
							placeholder="Enter Category"
							value={category}
							required
							onChange={(e) => setCategory(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group className="form" controlID="formOrigin">
						<Form.Control
							type="text"
							placeholder="Enter Origin"
							value={origin}
							required
							onChange={(e) => setOrigin(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group className="form" controlID="formPrice">
						<Form.Control
							type="text"
							placeholder="Enter Price"
							value={price}
							required
							onChange={(e) => setPrice(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group className="form" controlID="formMeasurement">
						<Form.Control
							type="text"
							placeholder="Enter Measurement"
							value={measurement}
							required
							onChange={(e) => setMeasurement(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group className="form" controlID="formQuantity">
						<Form.Control
							type="text"
							placeholder="Enter Quantity"
							value={quantity}
							required
							onChange={(e) => setQuantity(e.target.value)}></Form.Control>
					</Form.Group>
					<Button onClick={(e) => handleSubmit(e)} type="update">
						Update
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default EditFormManufacturer;
