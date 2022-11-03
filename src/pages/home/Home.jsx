import "./home.scss";

import NavbarHome from "../../components/navbar/NavbarHome";
import React from "react";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SidebarHome from "../../components/sidebar/SidebarHome";

const Home = () => {
	return (
		<div className="home">
			<SidebarHome />
			<div className="homeContainer">
				<NavbarHome />
				<h1>WELCOME TO OUR PROJECT!</h1>
					<div className="center">
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
						<SentimentVerySatisfiedOutlinedIcon className="iconTitle" />
					</div>
			</div>
		</div>
	);
};

export default Home;
