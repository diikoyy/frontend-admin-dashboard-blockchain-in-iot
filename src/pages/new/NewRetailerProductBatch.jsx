import "./newretailerproductbatch.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React from "react";
import { useState } from "react";
import SidebarRetailer from "../../components/sidebar/SidebarRetailer";
import NavbarRetailer from "../../components/navbar/NavbarRetailer";

const NewRetailerProductBatch = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	return (
		<div className="newretailerproductbatch">
			<SidebarRetailer />
			<div className="newContainer">
				<NavbarRetailer />
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt=""
						/>
						<div className="formInput">
							<label htmlFor="file">
								Image: <DriveFolderUploadOutlinedIcon className="icon" />
							</label>
							<input
								type="file"
								id="file"
								onChange={(e) => setFile(e.target.files[0])}
								style={{ display: "none" }}
							/>
						</div>
					</div>
					<div className="right">
						<form>
							{inputs.map((input) => (
								<div className="formInput" key={input.id}>
									<label>{input.label}</label>
									<input type={input.type} placeholder={input.placeholder} />
								</div>
							))}
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewRetailerProductBatch;
