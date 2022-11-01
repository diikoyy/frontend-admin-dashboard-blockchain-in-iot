import "./list.scss";

import DatatableProductBatchRetailer from "../../components/datatable/DatatableProductBatchRetailer";
import { Link } from "react-router-dom";
import React from "react";
import SidebarRetailer from "../../components/sidebar/SidebarRetailer";
import NavbarRetailer from "../../components/navbar/NavbarRetailer";

const Listproductbatchretailer = () => {
	return (
		<div className="list">
			<SidebarRetailer />
			<div className="listContainer">
				<NavbarRetailer />
				<Link to="/retailer/productbatch" style={{ textDecoration: "none" }}>
					<DatatableProductBatchRetailer />
				</Link>
			</div>
		</div>
	);
};

export default Listproductbatchretailer;
