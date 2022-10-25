import "./list.scss";

import Datatable from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Listuser = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Link to="/users" style={{ textDecoration: "none" }}>
					<Datatable />
				</Link>
			</div>
		</div>
	);
};

export default Listuser;
