import "./list.scss";

import Datatableproductbatchsource from "../../components/datatable/DatatableProductBatch";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Listproductbatch = () => {
	return (
		<div className="list">
			<Sidebar />
			<div className="listContainer">
				<Navbar />
				<Link to="/productbatch" style={{ textDecoration: "none" }}>
					<Datatableproductbatchsource />
				</Link>
			</div>
		</div>
	);
};

export default Listproductbatch;
