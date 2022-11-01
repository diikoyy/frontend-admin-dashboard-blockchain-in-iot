import "./list.scss";

import DatatableProductsManufacturer from "../../components/datatable/DatatableProductsManufacturer";
import { Link } from "react-router-dom";
import NavbarManufacturer from "../../components/navbar/NavbarManufacturer";
import React from "react";
import SidebarManufacturer from "../../components/sidebar/SidebarManufacturer"

const Listproductmanufacturer = () => {
	return (
		<div className="list">
			<SidebarManufacturer />
			<div className="listContainer">
				<NavbarManufacturer />
				<Link to="/manufacturer" style={{ textDecoration: "none" }}>
					<DatatableProductsManufacturer />
				</Link>
			</div>
		</div>
	);
};

export default Listproductmanufacturer;
