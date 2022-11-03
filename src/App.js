import "./style/dark.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManufacturerContextProvider, {
	ManufacturerContext,
} from "./context/ManufacturerContext";
import { productInputs, productbatchInputs, userInputs } from "./formSource";

import { DarkModeContext } from "./context/darkModeContext";
import Distributor from "./pages/distributor/Distributor";
import EditProductManufacturer from "./EditProductManufacturer";
import Home from "./pages/home/Home";
import Listproductbatch from "./pages/list/Listproductbatch";
import Listproductbatchdistributor from "./pages/list/Listproductbatchretailer";
import Listproductbatchmanufacturer from "./pages/list/Listproductbatchmanufacturer";
import Listproductbatchretailer from "./pages/list/Listproductbatchretailer";
import Listproductretailer from "./pages/list/Listproductretailer";
import Listuser from "./pages/list/Listuser";
import Login from "./pages/login/Login";
import Manufacturer from "./pages/manufacturer/Manufacturer";
import New from "./pages/new/New";
import NewManufacturerProductBatch from "./pages/new/NewManufacturerProductBatch";
import NewManufacturerProducts from "./pages/new/NewManufacturerProducts";
import NewRetailerProductBatch from "./pages/new/NewRetailerProductBatch";
import React from "react";
import Retailer from "./pages/retailer/Retailer";
import Single from "./pages/single/Single";
import { useContext } from "react";

function App() {
	// let [dogImage, setDogImage] = useState(null);
	// useEffect(() => {
	// 	fetch("https://dog.ceo/api/breeds/image/random/3").then(response => response.json()).then(data => setDogImage(data.message))
	// },[])
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? "app dark" : "app"}>
			{/* {dogImage &&
				dogImage.map((dog) => (
					<img width={"200px"} height={"200px"} src={dog} alt=""></img>
				))} */}
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="manufacturer">
							<Route index element={<Manufacturer />} />

							<Route
								path="newproduct"
								element={
									<NewManufacturerProducts
										inputs={productInputs}
										title="Create New Product"
									/>
								}
							/>
							<Route
								path="productbatch"
								index
								element={<Listproductbatchmanufacturer />}
							/>
							<Route
								path="newproductbatch"
								element={
									<NewManufacturerProductBatch
										inputs={productbatchInputs}
										title="Create New Product Batch"
									/>
								}
							/>
							{/* <Route path=":manufacturerID" element={<Single />} /> */}
						</Route>
						<Route path="distributor">
							<Route index element={<Distributor />} />
						</Route>
						<Route path="retailer">
							<Route index element={<Retailer />} />
							<Route
								path="productbatch"
								index
								element={<Listproductbatchretailer />}
							/>
							<Route
								path="newproductbatch"
								element={
									<NewRetailerProductBatch
										inputs={productbatchInputs}
										title="Create New Product Batch"
									/>
								}
							/>
						</Route>
						<Route path="users">
							<Route index element={<Listuser />} />
							<Route path=":userID" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={userInputs} title="Create New User" />}
							/>
						</Route>
						<Route path="productbatch">
							<Route index element={<Listproductbatch />} />
							<Route path=":productbatchID" element={<Single />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
