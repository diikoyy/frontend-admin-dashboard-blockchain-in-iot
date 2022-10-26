import "./list.scss";

import DatatableHistory from "../../components/datatable/DatatableHistory";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Listhistory = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Link to="/history" style={{ textDecoration: "none" }}>
					<DatatableHistory />
				</Link>
			</div>
		</div>
	);
};

export default Listhistory;
