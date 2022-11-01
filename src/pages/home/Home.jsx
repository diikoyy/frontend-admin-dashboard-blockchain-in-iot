import "./home.scss";

import NavbarHome from "../../components/navbar/NavbarHome";
import React from "react";
import SidebarHome from "../../components/sidebar/SidebarHome";

const Home = () => {
	return (
		<div className="home">
			<SidebarHome />
			<div className="homeContainer">
				<NavbarHome />
			</div>
		</div>
	);
};

export default Home;
