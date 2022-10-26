import "./sidebar.scss";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { DarkModeContext } from "../../context/darkModeContext"
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { Link } from "react-router-dom";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
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
					<li>
						<ReorderIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingOutlinedIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<LegendToggleIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneIcon className="icon" />
						<span>Notification</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<SettingsSystemDaydreamOutlinedIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsOutlinedIcon className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountCircleOutlinedIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppOutlinedIcon className="icon" />
						<span>Logout</span>
					</li>
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
