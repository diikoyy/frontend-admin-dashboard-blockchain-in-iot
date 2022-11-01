import "./list.scss";

import { Link } from "react-router-dom";
import React from "react";
import DatatableProductsRetailer from "../../components/datatable/DatatableProductsRetailer";
import SidebarRetailer from "../../components/sidebar/SidebarRetailer";
import NavbarRetailer from "../../components/navbar/NavbarRetailer";

const Listproductretailer = () => {
	return (
		<div className="list">
			<SidebarRetailer />
			<div className="listContainer">
				<NavbarRetailer />
				<Link to="/retailer" style={{ textDecoration: "none" }}>
					<DatatableProductsRetailer />
				</Link>
			</div>
		</div>
	);
};

export default Listproductretailer;
