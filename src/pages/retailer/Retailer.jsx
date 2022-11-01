import "./retailer.scss";

import NavbarRetailer from "../../components/navbar/NavbarRetailer";
import React from "react";
import { Link } from "react-router-dom";
import SidebarRetailer from "../../components/sidebar/SidebarRetailer";
import DatatableProductsRetailer from "../../components/datatable/DatatableProductsRetailer";

const Retailer = () => {
	return (
		<div className="retailer">
			<SidebarRetailer />
			<div className="retailerContainer">
				<NavbarRetailer />
				<Link to="/retailer" style={{ textDecoration: "none" }}>
					<DatatableProductsRetailer />
				</Link>
			</div>
		</div>
	);
};

export default Retailer;
