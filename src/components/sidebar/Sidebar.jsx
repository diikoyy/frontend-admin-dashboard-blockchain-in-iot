import "./sidebar.scss";

import { DarkModeContext } from "../../context/darkModeContext";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import React from "react";
import { useContext } from "react";

const Sidebar = () => {
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
					<Link to="/users" style={{ textDecoration: "none" }}>
						<li>
							<PersonOutlineOutlinedIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products" style={{ textDecoration: "none" }}>
						<li>
							<ProductionQuantityLimitsOutlinedIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>
					<Link to="/history" style={{ textDecoration: "none" }}>
						<li>
							<HistoryOutlinedIcon className="icon" />
							<span>History</span>
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

export default Sidebar;
