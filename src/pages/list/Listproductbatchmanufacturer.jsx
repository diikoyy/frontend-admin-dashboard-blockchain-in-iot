import "./list.scss";

import DatatableProductBatchManufacturer from "../../components/datatable/DatatableProductBatchManufacturer";
import { Link } from "react-router-dom";
import NavbarManufacturer from "../../components/navbar/NavbarManufacturer";
import React from "react";
import SidebarManufacturer from "../../components/sidebar/SidebarManufacturer";

const Listproductbatchmanufacturer= () => {
	return (
		<div className="list">
			<SidebarManufacturer />
			<div className="listContainer">
				<NavbarManufacturer />
				<Link
					to="/manufacturer/productbatch"
					style={{ textDecoration: "none" }}>
					<DatatableProductBatchManufacturer />
				</Link>
			</div>
		</div>
	);
};

export default Listproductbatchmanufacturer;
