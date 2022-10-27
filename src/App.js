import "./style/dark.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { historyInputs, productInputs, userInputs } from "./formSource";

import { DarkModeContext } from "./context/darkModeContext";
import Home from "./pages/home/Home";
import Listhistory from "./pages/list/Listhistory";
import Listproduct from "./pages/list/Listproduct";
import Listuser from "./pages/list/Listuser";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import React from "react";
import Single from "./pages/single/Single";
import { useContext } from "react";

function App() {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="users">
							<Route index element={<Listuser />} />
							<Route path=":userID" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={userInputs} title="Create New User" />}
							/>
						</Route>
						<Route path="products">
							<Route index element={<Listproduct />} />
							<Route path=":productID" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={productInputs} title="Create New Product" />}
							/>
						</Route>
						<Route path="history">
							<Route index element={<Listhistory />} />
							<Route path=":historyID" element={<Single />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
