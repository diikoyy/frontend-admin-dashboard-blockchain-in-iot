import "./sidebar.scss";

import { DarkModeContext } from "../../context/darkModeContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { Link } from "react-router-dom";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import React from "react";
import { useContext } from "react";

const SidebarRetailer = () => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">Foo_Admin</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<Link to="/" style={{ textDecoration: "none" }}>
						<li>
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</li>
					</Link>
					<p className="title">LISTS</p>
					<Link to="/retailer" style={{ textDecoration: "none" }}>
						<li>
							<ProductionQuantityLimitsOutlinedIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>
					<Link to="/retailer/productbatch" style={{ textDecoration: "none" }}>
						<li>
							<HistoryOutlinedIcon className="icon" />
							<span>Product Batch</span>
						</li>
					</Link>
				</ul>
			</div>
			<div className="bottom">
				<div
					className="colorOption"
					onClick={() => dispatch({ type: "LIGHT" })}></div>
				<div
					className="colorOption"
					onClick={() => dispatch({ type: "DARK" })}></div>
			</div>
		</div>
	);
};

export default SidebarRetailer;
