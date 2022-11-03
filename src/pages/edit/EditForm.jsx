import { Button, Col, Form, Row } from "react-bootstrap";
import { useContext, useState } from "react";

import { ManufacturerContext } from "../../context/ManufacturerContext";

const EditForm = (props) => {
	console.log("Props: " + JSON.stringify(props));
	const id = props.id;
	console.log("Id: " + id);

	const [product, setProduct] = useState(props.product);
	console.log("Product: " + product);
	const [category, setCategory] = useState(props.category);
	const [origin, setOrigin] = useState(props.origin);
	const [price, setPrice] = useState(props.price);
	const [measurement, setMeasurement] = useState(props.measurement);
	const [quantity, setQuantity] = useState(props.quantity);

	const updateManufacturer = useContext(ManufacturerContext);

	const updatedManufacturer = {
		id,
		product,
		category,
		origin,
		price,
		measurement,
		quantity,
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateManufacturer(id, updatedManufacturer);
	};

	return (
		<Row>
			<Col sm={6}>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="product">
						<Form.Control
							type="text"
							placeholder="Name Of Product"
							name="product"
							defaultValue={product}
							onChange={(e) => setProduct(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="category">
						<Form.Control
							type="text"
							placeholder="Category"
							name="category"
							defaultValue={category}
							onChange={(e) => setCategory(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="origin">
						<Form.Control
							type="text"
							placeholder="Origin"
							name="origin"
							defaultValue={origin}
							onChange={(e) => setOrigin(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="price">
						<Form.Control
							type="text"
							placeholder="Price"
							name="price"
							defaultValue={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="measurement">
						<Form.Control
							type="text"
							placeholder="Unit Of Measurement"
							name="measurement"
							defaultValue={measurement}
							onChange={(e) => setMeasurement(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group controlId="quantity">
						<Form.Control
							type="text"
							placeholder="Quantity"
							name="quantity"
							defaultValue={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Button variant="success" type="submit" block="true">
							Update
						</Button>
					</Form.Group>
				</Form>
			</Col>
		</Row>
	);
};

export default EditForm;
