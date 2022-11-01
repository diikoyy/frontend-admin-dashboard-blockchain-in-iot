import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import React,{StrictMode} from "react";
import { createRoot } from "react-dom/client";

// import ReactDOM from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</StrictMode>,
);
