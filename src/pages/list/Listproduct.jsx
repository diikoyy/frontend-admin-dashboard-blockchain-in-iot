import "./list.scss";

import DatatableProducts from "../../components/datatable/DatatableProducts";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Listproduct = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Link to="/products" style={{ textDecoration: "none" }}>
					<DatatableProducts />
				</Link>
			</div>
		</div>
	);
};

export default Listproduct;
