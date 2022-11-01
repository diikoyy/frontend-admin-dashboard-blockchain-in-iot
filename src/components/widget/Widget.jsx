import "./widget.scss";

import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Widget = ({ type }) => {
	let data;

	//temporary
	const amount = 100;
	const diff = 30;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: (
					<Link to="/users" style={{ textDecoration: "none" }}>
						"See all users"
					</Link>
				),
				icon: (
					<Link to="/users" style={{ textDecoration: "none" }}>
						<PersonOutlineOutlinedIcon
							className="icon"
							style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
						/>
					</Link>
				),
			};
			break;
		case "product":
			data = {
				title: "PRODUCTS",
				isMoney: false,
				link: (
					<Link to="/manufacturer/products" style={{ textDecoration: "none" }}>
						"View all products"
					</Link>
				),
				icon: (
					<Link to="/manufacturer/products" style={{ textDecoration: "none" }}>
						<ShoppingCartOutlinedIcon
							className="icon"
							style={{
								color: "goldenrod",
								backgroundColor: "rgba(218,165,32,0.2)",
							}}
						/>
					</Link>
				),
			};
			break;
		case "productbatch":
			data = {
				title: "PRODUCTBATCH",
				isMoney: false,
				link: (
					<Link to="/productbatch" style={{ textDecoration: "none" }}>
						"View product batch"
					</Link>
				),
				icon: (
					<Link to="/productbatch" style={{ textDecoration: "none" }}>
						<HistoryOutlinedIcon
							className="icon"
							style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
						/>
					</Link>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{data.isMoney && "$"} {amount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpOutlinedIcon />
					{diff} %
				</div>

				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
