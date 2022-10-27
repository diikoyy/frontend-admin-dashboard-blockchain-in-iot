import "./home.scss";

import Chart from "../../components/chart/Chart";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="product" />
					<Widget type="history" />
				</div>
				<h1 className="title">WELCOME TO OUR PROJECT!</h1>
				<div className="iconTitle">
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
					<DoubleArrowOutlinedIcon className="iconTitle" />
				</div>
				{/* <div className="charts">
					<Featured />
					<Chart title="Last 6 Months(Revenue)" aspect={2 / 1} />
				</div>
				<div className="listContainer">
					<div className="listTitle">Latest Transactions</div>
					<Table />
				</div> */}
			</div>
		</div>
	);
};

export default Home;
