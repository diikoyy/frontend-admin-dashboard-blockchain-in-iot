import "./manufacturer.scss";

import DatatableProductsManufacturer from "../../components/datatable/DatatableProductsManufacturer";
import { Link } from "react-router-dom";
import ManufacturerContextProvider from "../../context/ManufacturerContext";
import NavbarManufacturer from "../../components/navbar/NavbarManufacturer";
import React from "react";
import SidebarManufacturer from "../../components/sidebar/SidebarManufacturer";

const Manufacturer = () => {
	return (
		<div className="manufacturer">
			<SidebarManufacturer />
			<div className="manufacturerContainer">
				<NavbarManufacturer />
				<Link to="/manufacturer" style={{ textDecoration: "none" }}>
					<ManufacturerContextProvider>
						<DatatableProductsManufacturer />
					</ManufacturerContextProvider>
				</Link>
			</div>
		</div>
	);
};

export default Manufacturer;
