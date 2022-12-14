import "./newmanufacturerproductbatch.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import NavbarManufacturer from "../../components/navbar/NavbarManufacturer";
import React from "react";
import SidebarManufacturer from "../../components/sidebar/SidebarManufacturer";
import { useState } from "react";

const NewManufacturerProductBatch = ({ inputs, title }) => {
	const [file, setFile] = useState("");
	return (
		<div className="newmanufacturerproductbatch">
			<SidebarManufacturer />
			<div className="newContainer">
				<NavbarManufacturer />
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

export default NewManufacturerProductBatch;
