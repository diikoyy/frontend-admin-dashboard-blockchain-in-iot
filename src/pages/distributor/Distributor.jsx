import "./distributor.scss";

import NavbarDistributor from "../../components/navbar/NavbarDistributor";
import React from "react";
import { Link } from "react-router-dom";
import SidebarDistributor from "../../components/sidebar/SidebarDistributor";
import DatatableProductBatchDistributor from "../../components/datatable/DatatableProductBatchDistributor";

const Manufacturer = () => {
	return (
		<div className="distributor">
			<SidebarDistributor />
			<div className="distributorContainer">
				<NavbarDistributor />
				<Link to="/distributor" style={{ textDecoration: "none" }}>
					<DatatableProductBatchDistributor/>
				</Link>
			</div>
		</div>
	);
};

export default Manufacturer;
