import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</React.StrictMode>
);
